import { useRef, useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { FlaskConical, Package, Truck, ShieldCheck } from "lucide-react";

const SALES_EMAIL = "sales@crunchfood.ca";

const OPERATOR_TYPES = [
  "Foodservice Distributor",
  "QSR / Fried Chicken Chain",
  "Ghost Kitchen / Virtual Brand",
  "Independent Restaurant / Caterer",
  "Private Label / Co-Manufacturer",
  "Retail Buyer",
  "Other",
] as const;

const VOLUMES = [
  "Under 200 kg / month",
  "200 – 1,000 kg / month",
  "1 – 5 tonnes / month",
  "5 – 20 tonnes / month",
  "20+ tonnes / month",
] as const;

const PRODUCTS = [
  "Philadelphia Original Breading",
  "Crispy Wing Breading",
  "Hot Double Breading",
  "Crispy Spicy Marinade",
  "Peri Peri Marinations",
  "Nashville Hot Dustings",
  "Honey Spice Blends",
  "Dipping Spice Blends",
  "Private-label / Custom blend",
] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  company: z.string().trim().min(2, "Enter your company").max(120),
  role: z.string().trim().max(80).optional(),
  email: z.string().trim().email("Enter a valid work email").max(160),
  phone: z.string().trim().max(40).optional(),
  country: z.string().trim().min(2, "Enter your country").max(60),
  operator: z.enum(OPERATOR_TYPES, {
    errorMap: () => ({ message: "Pick the option that fits you best" }),
  }),
  locations: z.string().trim().max(120).optional(),
  volume: z.enum(VOLUMES, {
    errorMap: () => ({ message: "Pick an estimated monthly volume" }),
  }),
  products: z.array(z.enum(PRODUCTS)).min(1, "Pick at least one product"),
  shipTo: z.string().trim().min(5, "Enter a ship-to address or DC").max(240),
  notes: z.string().trim().max(800).optional(),
});

type FormErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const SampleRequest = () => {
  const [operator, setOperator] = useState<string>("");
  const [volume, setVolume] = useState<string>("");
  const [products, setProducts] = useState<string[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const mountedAt = useRef<number>(Date.now());

  const toggleProduct = (p: string, checked: boolean) => {
    setProducts((prev) =>
      checked ? [...prev, p] : prev.filter((x) => x !== p)
    );
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot
    if (String(fd.get("website") || "").length > 0) {
      setLoading(false);
      form.reset();
      setOperator(""); setVolume(""); setProducts([]);
      toast.success("Sample request received");
      return;
    }
    // Minimum time-to-submit
    if (Date.now() - mountedAt.current < 2500) {
      setLoading(false);
      toast.error("Please take a moment and try again.");
      return;
    }

    const payload = {
      name: String(fd.get("name") || ""),
      company: String(fd.get("company") || ""),
      role: String(fd.get("role") || "") || undefined,
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || "") || undefined,
      country: String(fd.get("country") || ""),
      operator,
      locations: String(fd.get("locations") || "") || undefined,
      volume,
      products,
      shipTo: String(fd.get("shipTo") || ""),
      notes: String(fd.get("notes") || "") || undefined,
    };

    const result = schema.safeParse(payload);
    if (!result.success) {
      const next: FormErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormErrors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setLoading(false);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setErrors({});

    const d = result.data;
    const resp = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "sample",
        name: d.name,
        company: d.company,
        role: d.role ?? null,
        email: d.email,
        phone: d.phone ?? null,
        country: d.country,
        operator: d.operator,
        locations: d.locations ?? null,
        volume: d.volume,
        products: d.products,
        shipTo: d.shipTo,
        message: d.notes ?? null,
        sourcePath: typeof window !== "undefined" ? window.location.pathname : null,
        userAgent: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 500) : null,
        raw: JSON.parse(JSON.stringify(d)),
      }),
    });

    setLoading(false);

    if (!resp.ok) {
      const body = await resp.json().catch(() => ({}));
      const desc = body.error?.includes("Too many")
        ? "You've sent several requests recently — please try again in an hour."
        : `Please try again or email ${SALES_EMAIL} directly.`;
      toast.error("Couldn't submit your sample request", { description: desc });
      return;
    }


    form.reset();
    setOperator("");
    setVolume("");
    setProducts([]);
    toast.success("Sample request received", {
      description: "Our team will contact with you in next 24hrs.",
    });
  };

  const errClass = (k: keyof FormErrors) =>
    errors[k] ? "border-destructive focus-visible:ring-destructive" : "";

  return (
    <section
      id="samples"
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      <div className="absolute -top-32 right-0 h-[400px] w-[600px] bg-primary/10 blur-3xl" />
      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Side: pitch */}
          <aside className="lg:col-span-4">
            <span className="text-eyebrow inline-flex items-center gap-2">
              <span className="h-px w-8 bg-primary" />
              Free Samples · USA & Canada
            </span>
            <h2 className="text-display mt-6 text-4xl lg:text-5xl">
              Request a <br />
              <span className="gradient-text-ember">sample pack.</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              Tell us a little about your operation and we'll ship a 2 kg
              pro-pack of the products that match your menu — with a spec sheet,
              COA, and a wholesale quote inside 24 hours.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                {
                  icon: FlaskConical,
                  k: "2 kg pro-packs",
                  v: "Real foodservice format — fryer-test it on your line.",
                },
                {
                  icon: Package,
                  k: "Spec sheet + COA",
                  v: "Allergen, nutrition, kosher/halal docs included.",
                },
                {
                  icon: Truck,
                  k: "DC-direct freight",
                  v: "FOB or DDP to your distribution center on approval.",
                },
                {
                  icon: ShieldCheck,
                  k: "NDA on request",
                  v: "Custom formulation work covered before any sharing.",
                },
              ].map(({ icon: Icon, k, v }) => (
                <li key={k} className="flex items-start gap-4">
                  <span className="h-10 w-10 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-foreground font-medium">{k}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{v}</div>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            noValidate
            className="lg:col-span-8 bg-card border border-border p-6 md:p-10 shadow-deep space-y-6"
          >
            {/* Honeypot — hidden from real users */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-10000px", width: 1, height: 1, opacity: 0 }}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sr-name">Your name *</Label>
                <Input
                  id="sr-name"
                  name="name"
                  maxLength={80}
                  className={`h-12 bg-background ${errClass("name")}`}
                />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="sr-company">Company / brand *</Label>
                <Input
                  id="sr-company"
                  name="company"
                  maxLength={120}
                  className={`h-12 bg-background ${errClass("company")}`}
                />
                {errors.company && (
                  <p className="text-xs text-destructive">{errors.company}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="sr-role">Your role</Label>
                <Input
                  id="sr-role"
                  name="role"
                  maxLength={80}
                  placeholder="Buyer, Chef, Ops, Founder…"
                  className="h-12 bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sr-email">Work email *</Label>
                <Input
                  id="sr-email"
                  name="email"
                  type="email"
                  maxLength={160}
                  className={`h-12 bg-background ${errClass("email")}`}
                />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="sr-phone">Phone (optional)</Label>
                <Input
                  id="sr-phone"
                  name="phone"
                  maxLength={40}
                  className="h-12 bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sr-country">Country *</Label>
                <Input
                  id="sr-country"
                  name="country"
                  maxLength={60}
                  placeholder="USA, Canada, UK…"
                  className={`h-12 bg-background ${errClass("country")}`}
                />
                {errors.country && (
                  <p className="text-xs text-destructive">{errors.country}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Operator type *</Label>
                <Select value={operator} onValueChange={setOperator}>
                  <SelectTrigger
                    className={`h-12 bg-background ${errClass("operator")}`}
                  >
                    <SelectValue placeholder="Select operator type" />
                  </SelectTrigger>
                  <SelectContent>
                    {OPERATOR_TYPES.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.operator && (
                  <p className="text-xs text-destructive">{errors.operator}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label>Estimated monthly volume *</Label>
                <Select value={volume} onValueChange={setVolume}>
                  <SelectTrigger
                    className={`h-12 bg-background ${errClass("volume")}`}
                  >
                    <SelectValue placeholder="Select volume" />
                  </SelectTrigger>
                  <SelectContent>
                    {VOLUMES.map((v) => (
                      <SelectItem key={v} value={v}>
                        {v}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.volume && (
                  <p className="text-xs text-destructive">{errors.volume}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="sr-locations">
                Number of locations / units (if applicable)
              </Label>
              <Input
                id="sr-locations"
                name="locations"
                maxLength={120}
                placeholder="e.g. 12 ghost-kitchen sites across NYC"
                className="h-12 bg-background"
              />
            </div>

            <div className="space-y-3">
              <Label>Products of interest *</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {PRODUCTS.map((p) => {
                  const id = `sr-p-${p.replace(/\s+/g, "-")}`;
                  const checked = products.includes(p);
                  return (
                    <label
                      key={p}
                      htmlFor={id}
                      className={`flex items-start gap-3 p-3 border bg-background cursor-pointer transition-colors ${
                        checked
                          ? "border-primary/60"
                          : "border-border hover:border-primary/40"
                      }`}
                    >
                      <Checkbox
                        id={id}
                        checked={checked}
                        onCheckedChange={(v) => toggleProduct(p, v === true)}
                        className="mt-0.5"
                      />
                      <span className="text-sm text-foreground leading-snug">
                        {p}
                      </span>
                    </label>
                  );
                })}
              </div>
              {errors.products && (
                <p className="text-xs text-destructive">{errors.products}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="sr-shipTo">Ship-to address or DC *</Label>
              <Textarea
                id="sr-shipTo"
                name="shipTo"
                maxLength={240}
                placeholder="Distribution center, kitchen address, or city + ZIP for sample shipping."
                className={`min-h-[80px] bg-background ${errClass("shipTo")}`}
              />
              {errors.shipTo && (
                <p className="text-xs text-destructive">{errors.shipTo}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="sr-notes">Notes (timeline, MOQ, format)</Label>
              <Textarea
                id="sr-notes"
                name="notes"
                maxLength={800}
                placeholder="Anything we should know — launch date, packaging needs, target price, certifications…"
                className="min-h-[100px] bg-background"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Button
                type="submit"
                variant="ember"
                size="xl"
                disabled={loading}
                className="sm:w-auto w-full"
              >
                {loading ? "Preparing…" : "Request samples →"}
              </Button>
              <p className="text-xs text-muted-foreground">
                Opens your email app with the details pre-filled. We reply
                within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SampleRequest;
