import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export type PackSpec = {
  ingredients: string;
  bolded?: string[];
  allergens?: string;
  method?: string;
};

const renderIngredients = (text: string, bolded: string[] = []) => {
  if (!bolded.length) return text;
  const pattern = new RegExp(
    `(${bolded.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g"
  );
  return text.split(pattern).map((part, i) =>
    bolded.includes(part) ? (
      <strong key={i} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

type Props = PackSpec & {
  className?: string;
  triggerLabel?: string;
};

const PackDetails = ({
  ingredients,
  bolded,
  allergens,
  method,
  className = "",
  triggerLabel = "View pack details",
}: Props) => {
  return (
    <Collapsible className={className}>
      <CollapsibleTrigger className="group/trig flex items-center gap-2 text-xs uppercase tracking-wider text-primary hover:text-primary/80 transition-colors">
        <span>{triggerLabel}</span>
        <span
          aria-hidden
          className="transition-transform group-data-[state=open]/trig:rotate-180"
        >
          ↓
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-5 space-y-5 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
        <div>
          <div className="text-eyebrow mb-2">Ingredients</div>
          <p
            className="text-sm text-muted-foreground leading-relaxed"
            itemProp="ingredients"
          >
            {renderIngredients(ingredients, bolded)}
          </p>
        </div>
        {allergens && (
          <div>
            <div className="text-eyebrow mb-2">Allergen advice</div>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              {allergens}
            </p>
          </div>
        )}
        {method && (
          <div>
            <div className="text-eyebrow mb-2">Suggested application</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {method}
            </p>
          </div>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default PackDetails;
