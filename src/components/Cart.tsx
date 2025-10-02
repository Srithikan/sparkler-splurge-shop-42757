import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Download, Sparkles } from "lucide-react";
import { Cracker } from "@/data/crackers";

interface CartItem {
  product: Cracker;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onDownloadOrder: () => void;
}

export const Cart = ({ items, onDownloadOrder }: CartProps) => {
  const total = items.reduce(
    (sum, item) => sum + item.product.discountedPrice * item.quantity,
    0
  );

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Card className="sticky top-4 shadow-hover border-2 border-primary/20 bg-card overflow-hidden">
      <div className="bg-gradient-festive p-4 text-primary-foreground">
        <div className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5" />
          <h2 className="text-lg font-bold">Your Cart</h2>
          <Sparkles className="h-4 w-4 ml-auto" />
        </div>
        {itemCount > 0 && (
          <p className="text-sm opacity-90 mt-1">{itemCount} items</p>
        )}
      </div>

      <ScrollArea className="h-[calc(100vh-300px)] min-h-[200px]">
        <div className="p-4 space-y-3">
          {items.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <ShoppingCart className="h-12 w-12 mx-auto mb-2 opacity-30" />
              <p className="text-sm">Your cart is empty</p>
              <p className="text-xs mt-1">Add items to get started!</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="space-y-1">
                <div className="flex justify-between items-start gap-2">
                  <p className="text-sm font-medium text-card-foreground flex-1 leading-tight">
                    {item.product.name}
                  </p>
                  <p className="text-sm font-semibold text-primary whitespace-nowrap">
                    ₹{item.product.discountedPrice * item.quantity}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">
                  {item.quantity} × ₹{item.product.discountedPrice}
                </p>
                <Separator className="mt-2" />
              </div>
            ))
          )}
        </div>
      </ScrollArea>

      <div className="border-t p-4 space-y-4 bg-muted/30">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-card-foreground">Total</span>
          <span className="text-2xl font-bold bg-gradient-festive bg-clip-text text-transparent">
            ₹{total.toLocaleString('en-IN')}
          </span>
        </div>
        
        <Button
          onClick={onDownloadOrder}
          disabled={items.length === 0}
          className="w-full bg-gradient-festive hover:shadow-glow transition-all duration-300 text-primary-foreground font-semibold"
          size="lg"
        >
          <Download className="mr-2 h-4 w-4" />
          Order Now (Download CSV)
        </Button>
      </div>
    </Card>
  );
};
