import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-gradient-primary"></div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              TechStore
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Produtos
          </a>
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Serviços
          </a>
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Categorias
          </a>
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Sobre
          </a>
        </nav>

        {/* Search */}
        <div className="flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar produtos..."
              className="pl-10 transition-shadow focus:shadow-primary"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-xs text-accent-foreground flex items-center justify-center">
              0
            </span>
          </Button>
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <User className="h-4 w-4 mr-2" />
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;