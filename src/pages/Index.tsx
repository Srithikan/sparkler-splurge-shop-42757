import { useState, useMemo } from "react";
import { crackers, categories } from "@/data/crackers";
import { ProductCard } from "@/components/ProductCard";
import { Cart } from "@/components/Cart";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { downloadOrderAsCSV } from "@/utils/csvExport";
import { toast } from "sonner";
import { Sparkles, Phone } from "lucide-react";

const Index = () => {
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);

  const handleQuantityChange = (id: number, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: quantity
    }));
  };

  const cartItems = useMemo(() => {
    return crackers
      .filter(product => (quantities[product.id] || 0) > 0)
      .map(product => ({
        product,
        quantity: quantities[product.id]
      }));
  }, [quantities]);

  const handleDownloadOrder = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    
    downloadOrderAsCSV(cartItems);
    toast.success("Order downloaded successfully!", {
      description: "Check your downloads folder for the CSV file."
    });
    setIsMobileCartOpen(false);
  };

  const filteredCrackers = selectedCategory === "all" 
    ? crackers 
    : crackers.filter(c => c.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="bg-gradient-festive text-primary-foreground shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-2 justify-center md:justify-start">
                <Sparkles className="h-8 w-8" />
                Sivakai Crackers
              </h1>
              <p className="text-sm md:text-base opacity-90 mt-1">
                Festive crackers at unbeatable prices! 🎆
              </p>
            </div>
            <div className="flex flex-col gap-1 text-center md:text-right">
              <div className="flex items-center gap-2 text-sm md:text-base justify-center md:justify-end">
                <Phone className="h-4 w-4" />
                <a href="tel:+919944063645" className="hover:underline">
                  +91 99440 63645
                </a>
              </div>
              <a href="tel:+919787823249" className="text-sm hover:underline">
                +91 97878 23249
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_380px] gap-8">
          {/* Products Section */}
          <div className="space-y-6">
            {/* Category Tabs */}
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="w-full flex-wrap h-auto gap-2 bg-card/50 p-2">
                <TabsTrigger value="all" className="data-[state=active]:bg-gradient-festive data-[state=active]:text-primary-foreground">
                  All Products
                </TabsTrigger>
                {categories.map(category => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="data-[state=active]:bg-gradient-festive data-[state=active]:text-primary-foreground text-xs md:text-sm"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCrackers.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  quantity={quantities[product.id] || 0}
                  onQuantityChange={handleQuantityChange}
                />
              ))}
            </div>

            {filteredCrackers.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <p>No products found in this category.</p>
              </div>
            )}
          </div>

          {/* Cart Section - Sticky on desktop */}
          <div className="lg:block hidden">
            <Cart items={cartItems} onDownloadOrder={handleDownloadOrder} />
          </div>

          {/* Mobile Cart Button */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t shadow-lg z-30">
            <Button
              onClick={() => setIsMobileCartOpen(true)}
              disabled={cartItems.length === 0}
              className="w-full bg-gradient-festive hover:shadow-glow transition-all duration-300 text-primary-foreground font-semibold h-12"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              View Cart ({cartItems.length} items) - ₹
              {cartItems.reduce((sum, item) => sum + item.product.discountedPrice * item.quantity, 0).toLocaleString('en-IN')}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Cart Sheet */}
      <Sheet open={isMobileCartOpen} onOpenChange={setIsMobileCartOpen}>
        <SheetContent side="bottom" className="h-[90vh] p-0 flex flex-col">
          <SheetHeader className="p-4 border-b flex-shrink-0">
            <SheetTitle>Your Cart</SheetTitle>
          </SheetHeader>
          <div className="flex-1 overflow-hidden">
            <Cart items={cartItems} onDownloadOrder={handleDownloadOrder} />
          </div>
        </SheetContent>
      </Sheet>

      {/* Footer Spacing for Mobile */}
      <div className="lg:hidden h-20" />
    </div>
  );
};

export default Index;
