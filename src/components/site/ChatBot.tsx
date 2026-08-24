import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { toast } from "sonner";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What's in the Philadelphia breading?",
  "MOQ & lead time for ghost kitchens?",
  "Honey blend dilution ratio?",
  "Send me a sample pack",
];

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hey 👋 I'm **Crispy**, the product assistant for Crunch Foods.\n\nAsk me anything about our breading, peri peri marinades, Nashville dustings, honey blends, MOQs, allergens or shipping — or tell me about your operation and I'll line up a free sample pack.",
};

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg: Msg = { role: "user", content: trimmed };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    const controller = new AbortController();
    abortRef.current = controller;

    let assistantSoFar = "";
    const upsert = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant" && last !== GREETING && prev.length > next.length) {
          return prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, content: assistantSoFar } : m,
          );
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: next.map(({ role, content }) => ({ role, content })),
        }),
        signal: controller.signal,
      });

      if (!resp.ok || !resp.body) {
        if (resp.status === 429) {
          toast.error("Too many requests — give me a sec and try again.");
        } else if (resp.status === 402) {
          toast.error("AI credits exhausted. Please contact support.");
        } else {
          toast.error("Chat failed. Please try again or email sales@crunchfood.ca.");
        }
        setMessages((prev) => prev.slice(0, -1));
        setLoading(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      let done = false;

      while (!done) {
        const { value, done: streamDone } = await reader.read();
        if (streamDone) break;
        buf += decoder.decode(value, { stream: true });

        let idx: number;
        while ((idx = buf.indexOf("\n")) !== -1) {
          let line = buf.slice(0, idx);
          buf = buf.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line || line.startsWith(":")) continue;
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") { done = true; break; }
          try {
            const parsed = JSON.parse(json);
            const delta = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (delta) upsert(delta);
          } catch {
            buf = line + "\n" + buf;
            break;
          }
        }
      }
    } catch (e) {
      if ((e as Error).name !== "AbortError") {
        console.error(e);
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
      abortRef.current = null;
    }
  };

  return (
    <>
      {/* Floating launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat with Crispy"}
        className="fixed bottom-5 left-5 z-50 h-14 w-14 rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-deep flex items-center justify-center hover:scale-105 transition-transform"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!open && (
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[hsl(142_70%_45%)] ring-2 ring-background animate-pulse" />
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed inset-x-3 bottom-24 z-50 sm:inset-x-auto sm:left-5 sm:bottom-24 sm:w-[400px] max-h-[75vh] flex flex-col bg-card border border-border shadow-deep overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-border bg-gradient-to-r from-primary/10 to-transparent">
            <span className="h-9 w-9 rounded-full bg-primary/20 text-primary flex items-center justify-center">
              <Sparkles className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <div className="text-foreground font-semibold leading-tight">Crunch Foods · Product AI</div>
              <div className="text-xs text-muted-foreground">Replies in seconds · 24/7</div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3 py-2 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground rounded-2xl rounded-br-sm"
                    : "mr-auto bg-background border border-border text-foreground rounded-2xl rounded-bl-sm"
                }`}
              >
                {m.role === "assistant" ? (
                  <div className="prose prose-sm prose-invert max-w-none [&_p]:my-1 [&_ul]:my-1 [&_ol]:my-1 [&_strong]:text-foreground">
                    <ReactMarkdown>{m.content || "…"}</ReactMarkdown>
                  </div>
                ) : (
                  <span>{m.content}</span>
                )}
              </div>
            ))}
            {loading && messages[messages.length - 1]?.role === "user" && (
              <div className="mr-auto bg-background border border-border text-muted-foreground rounded-2xl rounded-bl-sm px-3 py-2 text-sm">
                <span className="inline-flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce" />
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:0.15s]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:0.3s]" />
                </span>
              </div>
            )}
          </div>

          {/* Suggestions */}
          {messages.length <= 1 && (
            <div className="px-3 pb-2 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-xs px-2.5 py-1.5 border border-border bg-background hover:border-primary/60 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Composer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="p-3 border-t border-border flex items-center gap-2 bg-background"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about ingredients, MOQs, samples…"
              className="flex-1 h-10 bg-card border-border"
              disabled={loading}
              maxLength={500}
            />
            <Button type="submit" size="icon" variant="ember" disabled={loading || !input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
