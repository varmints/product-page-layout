import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  MapPin,
  Search,
  ShoppingCart,
  User,
  Menu,
  Truck,
  Undo2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState("Glitz Cream");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const colors = [
    { name: "Glitz Cream", hex: "#E8E6DE" },
    { name: "Dusty Rose", hex: "#C17F78" },
    { name: "Black", hex: "#2C2C2C" },
    { name: "Brown", hex: "#8B6E5A" },
    { name: "Tan", hex: "#9B8579" },
    { name: "Charcoal", hex: "#4A4A4A" },
    { name: "Gray", hex: "#9FA0A0" },
    { name: "Wine", hex: "#722F37" },
    { name: "Teal", hex: "#27514F" },
    { name: "Red", hex: "#B93B3B" },
  ];

  const sizes = [
    { value: "5", label: "5" },
    { value: "5.5", label: "5½" },
    { value: "6", label: "6" },
    { value: "6.5", label: "6½" },
    { value: "7", label: "7" },
    { value: "7.5", label: "7½" },
    { value: "8", label: "8" },
    { value: "8.5", label: "8½" },
    { value: "9", label: "9" },
    { value: "9.5", label: "9½" },
    { value: "10", label: "10" },
    { value: "10.5", label: "10½" },
    { value: "11", label: "11" },
    { value: "11.5", label: "11½" },
    { value: "12", label: "12" },
  ];

  const images = [
    "/product-images/01.webp",
    "/product-images/02.webp",
    "/product-images/03.webp",
    "/product-images/04.webp",
    "/product-images/05.webp",
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleToggleFavorite = () => {
    setIsFavorited(!isFavorited);
    toast({
      title: isFavorited ? "Removed from favorites" : "Added to favorites",
      description: isFavorited
        ? "This item has been removed from your favorites"
        : "This item has been added to your favorites",
    });
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You must select a size before adding to cart",
        variant: "destructive",
      });
      return;
    }

    setCartCount((prev) => prev + 1);
    toast({
      title: "Added to cart",
      description: `Size ${selectedSize} in ${selectedColor} added to your cart`,
    });
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);

    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="rounded-lg p-2 transition-colors hover:bg-gray-100 md:hidden">
                  <Menu className="h-6 w-6 text-gray-600" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="mt-8 flex flex-col gap-4">
                  <a
                    href="#"
                    className="rounded-lg px-4 py-2 text-lg text-gray-900 transition-colors hover:bg-gray-50 hover:text-gray-600"
                  >
                    MEN
                  </a>
                  <a
                    href="#"
                    className="rounded-lg px-4 py-2 text-lg text-gray-900 transition-colors hover:bg-gray-50 hover:text-gray-600"
                  >
                    WOMEN
                  </a>
                  <div className="my-4 border-t border-gray-200"></div>
                  <a
                    href="#"
                    className="rounded-lg px-4 py-2 text-lg text-gray-900 transition-colors hover:bg-gray-50 hover:text-gray-600"
                  >
                    BOOTS
                  </a>
                  <a
                    href="#"
                    className="rounded-lg px-4 py-2 text-lg text-gray-900 transition-colors hover:bg-gray-50 hover:text-gray-600"
                  >
                    SHOES
                  </a>
                  <a
                    href="#"
                    className="rounded-lg px-4 py-2 text-lg text-gray-900 transition-colors hover:bg-gray-50 hover:text-gray-600"
                  >
                    READY TO WEAR
                  </a>
                  <a
                    href="#"
                    className="rounded-lg px-4 py-2 text-lg text-gray-900 transition-colors hover:bg-gray-50 hover:text-gray-600"
                  >
                    ACCESSORIES
                  </a>
                  <a
                    href="#"
                    className="rounded-lg px-4 py-2 text-lg text-gray-900 transition-colors hover:bg-gray-50 hover:text-gray-600"
                  >
                    LIFESTYLE
                  </a>
                  <a
                    href="#"
                    className="rounded-lg px-4 py-2 text-lg text-gray-900 transition-colors hover:bg-gray-50 hover:text-gray-600"
                  >
                    COLLABORATIONS
                  </a>
                  <a
                    href="#"
                    className="rounded-lg px-4 py-2 text-lg text-gray-900 transition-colors hover:bg-gray-50 hover:text-gray-600"
                  >
                    SHOP THE LOOK
                  </a>
                </nav>
              </SheetContent>
            </Sheet>

            <div className="hidden items-center space-x-4 sm:space-x-8 md:flex">
              <a
                href="#"
                className="text-sm text-gray-900 transition-colors hover:text-gray-600 sm:text-base"
              >
                MEN
              </a>
              <a
                href="#"
                className="text-sm text-gray-900 transition-colors hover:text-gray-600 sm:text-base"
              >
                WOMEN
              </a>
            </div>

            <div className="font-serif text-xl sm:text-2xl">LUCCHESE</div>

            <div className="flex items-center space-x-3 sm:space-x-6">
              <MapPin className="h-4 w-4 cursor-pointer text-gray-600 transition-colors hover:text-gray-900 sm:h-5 sm:w-5" />
              <Search className="h-4 w-4 cursor-pointer text-gray-600 transition-colors hover:text-gray-900 sm:h-5 sm:w-5" />
              <User className="h-4 w-4 cursor-pointer text-gray-600 transition-colors hover:text-gray-900 sm:h-5 sm:w-5" />
              <Heart className="h-4 w-4 cursor-pointer text-gray-600 transition-colors hover:text-gray-900 sm:h-5 sm:w-5" />
              <div className="relative">
                <ShoppingCart className="h-4 w-4 cursor-pointer text-gray-600 transition-colors hover:text-gray-900 sm:h-5 sm:w-5" />
                {cartCount > 0 && (
                  <div className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {cartCount}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <nav className="hidden overflow-x-auto border-b border-gray-200 md:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center justify-start space-x-4 whitespace-nowrap text-xs sm:justify-center sm:space-x-8 sm:text-sm">
            <a
              href="#"
              className="text-gray-900 transition-colors hover:text-gray-600"
            >
              BOOTS
            </a>
            <a
              href="#"
              className="text-gray-900 transition-colors hover:text-gray-600"
            >
              SHOES
            </a>
            <a
              href="#"
              className="text-gray-900 transition-colors hover:text-gray-600"
            >
              READY TO WEAR
            </a>
            <a
              href="#"
              className="text-gray-900 transition-colors hover:text-gray-600"
            >
              ACCESSORIES
            </a>
            <a
              href="#"
              className="text-gray-900 transition-colors hover:text-gray-600"
            >
              LIFESTYLE
            </a>
            <a
              href="#"
              className="text-gray-900 transition-colors hover:text-gray-600"
            >
              COLLABORATIONS
            </a>
            <a
              href="#"
              className="text-gray-900 transition-colors hover:text-gray-600"
            >
              SHOP THE LOOK
            </a>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-gray-600 sm:text-sm">
            <a href="#" className="transition-colors hover:text-gray-900">
              Home
            </a>
            <span>/</span>
            <a href="#" className="transition-colors hover:text-gray-900">
              All
            </a>
            <span>/</span>
            <span className="text-gray-900">Priscilla</span>
          </div>
          <button className="flex items-center space-x-2 text-xs text-gray-600 transition-colors hover:text-gray-900 sm:text-sm">
            <span>SHARE</span>
            <Share2 className="h-3 w-3 sm:h-4 sm:w-4" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
          {/* Product Images */}
          <div className="relative">
            {/* Desktop Thumbnails */}
            <div className="absolute left-0 top-0 hidden h-full w-20 flex-col gap-4 overflow-y-auto p-2 md:flex">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={cn(
                    "relative aspect-square w-full overflow-hidden rounded-lg border-2 transition-all",
                    currentImageIndex === index
                      ? "border-gray-900"
                      : "border-transparent hover:border-gray-300",
                  )}
                >
                  <img
                    src={image}
                    alt={`Product thumbnail ${index + 1}`}
                    className="h-full w-full object-cover object-center"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative ml-0 md:ml-24">
              <div className="bg-gray-100">
                <img
                  src={images[currentImageIndex]}
                  alt="Product"
                  className="h-full w-full object-cover object-center"
                />
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 backdrop-blur-sm transition-colors hover:bg-white sm:left-4 sm:p-2"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 backdrop-blur-sm transition-colors hover:bg-white sm:right-4 sm:p-2"
                >
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button
                  onClick={handleToggleFavorite}
                  className="absolute right-2 top-2 rounded-full bg-white/80 p-2 backdrop-blur-sm transition-colors hover:bg-white sm:right-4 sm:top-4"
                >
                  <Heart
                    className={cn(
                      "h-4 w-4 transition-colors sm:h-6 sm:w-6",
                      isFavorited
                        ? "fill-red-500 text-red-500"
                        : "text-gray-600",
                    )}
                  />
                </button>
              </div>
            </div>

            {/* Mobile Thumbnails */}
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2 md:hidden">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={cn(
                    "relative aspect-square w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all",
                    currentImageIndex === index
                      ? "border-gray-900"
                      : "border-transparent hover:border-gray-300",
                  )}
                >
                  <img
                    src={image}
                    alt={`Product thumbnail ${index + 1}`}
                    className="h-full w-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-medium sm:text-3xl">PRISCILLA</h1>
                <p className="mt-2 text-xl text-gray-900 sm:text-2xl">$1,095</p>
                <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                  As low as $99/mo with Affirm
                  <a
                    href="#"
                    className="ml-1 text-blue-600 hover:text-blue-700"
                  >
                    Check your purchasing power
                  </a>
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-600 sm:text-sm">
                STYLE NO.N4831.S4-1521-B-6
              </p>
              <p className="mt-4 text-sm text-gray-900 sm:text-base">
                Our No. 1 bestselling boot for women, Priscilla walks an elegant
                line between timeless classic and cowgirl chic. The
                vintage-inspired Tioga stitch pattern harks back to yesteryear,
                but Priscilla is...
                <button className="text-blue-600 hover:text-blue-700">
                  Read more
                </button>
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium sm:text-base">
                  Color: {selectedColor}
                </h3>
                <div className="flex items-center space-x-2">
                  <button className="text-xs text-blue-600 hover:text-blue-700 sm:text-sm">
                    FIT GUIDE
                  </button>
                  <span className="text-gray-300">|</span>
                  <button className="text-xs text-blue-600 hover:text-blue-700 sm:text-sm">
                    SIZE CHART
                  </button>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-5 gap-2 sm:grid-cols-10">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={cn(
                      "h-6 w-6 rounded-full border-2 transition-all duration-200 sm:h-8 sm:w-8",
                      selectedColor === color.name
                        ? "scale-110 border-gray-900"
                        : "border-transparent hover:scale-105",
                    )}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {selectedSize && (
                <div className="rounded-md bg-gray-200 p-3 sm:p-4">
                  <p className="text-sm text-gray-700">
                    Selected: Size: {selectedSize}, Width: B, Calf Width:
                    Regular
                  </p>
                </div>
              )}
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <button className="w-full rounded border-2 border-gray-900 bg-white px-4 py-3 text-sm text-gray-900 transition-colors hover:bg-gray-50 sm:px-6 sm:py-4 sm:text-base">
                    {selectedSize ? `Size: ${selectedSize}` : "Choose Size"}
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-center">
                      Select Size
                    </DialogTitle>
                  </DialogHeader>
                  <div className="py-6">
                    <RadioGroup
                      value={selectedSize}
                      onValueChange={handleSizeSelect}
                      className="grid grid-cols-3 gap-3 sm:gap-4"
                    >
                      {sizes.map((size) => (
                        <div key={size.value}>
                          <RadioGroupItem
                            value={size.value}
                            id={size.value}
                            className="peer sr-only"
                          />
                          <label
                            htmlFor={size.value}
                            className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-3 hover:bg-gray-50 peer-data-[state=checked]:border-gray-900 sm:p-4 [&:has([data-state=checked])]:border-gray-900"
                          >
                            <span className="text-sm font-medium">
                              {size.label}
                            </span>
                          </label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </DialogContent>
              </Dialog>

              <button
                onClick={handleAddToCart}
                className="w-full rounded bg-[#0A2240] px-4 py-3 text-sm text-white transition-colors hover:bg-[#0A2240]/90 sm:px-6 sm:py-4 sm:text-base"
              >
                ADD TO BAG
              </button>

              <button className="w-full rounded bg-[#5A31F4] px-4 py-3 text-sm text-white transition-colors hover:bg-[#5A31F4]/90 sm:px-6 sm:py-4 sm:text-base">
                Buy with Shop Pay
              </button>

              <button className="w-full text-center text-sm text-gray-600 transition-colors hover:text-gray-900 sm:text-base">
                More payment options
              </button>
            </div>

            <button className="flex w-full items-center justify-center space-x-2 rounded border border-gray-300 px-4 py-3 text-xs transition-colors hover:bg-gray-50 sm:px-6 sm:py-4 sm:text-sm">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>CHECK AVAILABILITY IN STORE</span>
            </button>

            <div className="space-y-3 border-t border-gray-200 pt-4 sm:space-y-4 sm:pt-6">
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-600 sm:text-sm">
                <Truck className="h-5 w-5 flex-shrink-0 sm:h-6 sm:w-6" />
                <span>FREE SHIPPING ON ORDERS OVER $100</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-600 sm:text-sm">
                <Undo2 className="h-5 w-5 flex-shrink-0 sm:h-6 sm:w-6" />
                <span>30-DAY RETURN OR EXCHANGE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
