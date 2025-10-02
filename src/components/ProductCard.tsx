import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Cracker } from "@/data/crackers";
import { Sparkles } from "lucide-react";

interface ProductCardProps {
  product: Cracker;
  quantity: number;
  onQuantityChange: (id: number, quantity: number) => void;
}

export const ProductCard = ({ product, quantity, onQuantityChange }: ProductCardProps) => {
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    onQuantityChange(product.id, Math.max(0, value));
  };

  const itemTotal = product.discountedPrice * quantity;

  return (
    <Card className="p-4 shadow-card hover:shadow-hover transition-all duration-300 border-border bg-card group">
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-sm text-card-foreground leading-tight flex-1">
            {product.name}
          </h3>
          <Sparkles className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground line-through">
              ₹{product.originalPrice}
            </span>
            <Badge variant="secondary" className="bg-gradient-festive text-primary-foreground text-xs px-2 py-0">
              90% OFF
            </Badge>
          </div>
          <p className="text-xl font-bold bg-gradient-festive bg-clip-text text-transparent">
            ₹{product.discountedPrice}
          </p>
          <p className="text-xs text-muted-foreground">{product.unit}</p>
        </div>

        <div className="space-y-2">
          <label className="text-xs text-muted-foreground">Quantity</label>
          <Input
            type="number"
            min="0"
            value={quantity || ""}
            onChange={handleQuantityChange}
            placeholder="0"
            className="h-9 text-center font-medium"
          />
          {quantity > 0 && (
            <p className="text-sm font-semibold text-primary">
              Total: ₹{itemTotal}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
};
