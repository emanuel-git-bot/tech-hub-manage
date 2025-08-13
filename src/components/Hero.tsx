import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-tech-store.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in slide-in-from-bottom duration-1000">
          Sua Loja de
          <span className="block bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            Tecnologia Completa
          </span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-in slide-in-from-bottom duration-1000 delay-200">
          Produtos de alta qualidade, serviços especializados e suporte técnico profissional. 
          Tudo que você precisa em tecnologia, em um só lugar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in slide-in-from-bottom duration-1000 delay-400">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 shadow-glow transition-all duration-300 hover:scale-105"
          >
            <ShoppingBag className="h-5 w-5 mr-2" />
            Ver Produtos
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
          >
            <Wrench className="h-5 w-5 mr-2" />
            Nossos Serviços
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-in slide-in-from-bottom duration-1000 delay-600">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">1000+</div>
            <div className="text-sm opacity-80">Produtos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">5+</div>
            <div className="text-sm opacity-80">Anos no Mercado</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">24h</div>
            <div className="text-sm opacity-80">Suporte</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">98%</div>
            <div className="text-sm opacity-80">Satisfação</div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-accent/20 rounded-full animate-bounce"></div>
    </section>
  );
};

export default Hero;