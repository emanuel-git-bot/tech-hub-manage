import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  Clock
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter */}
        <div className="bg-primary-glow/10 rounded-lg p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-2">Fique por Dentro das Novidades</h3>
          <p className="opacity-90 mb-6">Receba ofertas exclusivas e lançamentos em primeira mão</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Seu e-mail" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button variant="secondary" className="whitespace-nowrap">
              <Mail className="h-4 w-4 mr-2" />
              Inscrever
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 rounded bg-white/20"></div>
              <span className="text-xl font-bold">TechStore</span>
            </div>
            <p className="opacity-90 mb-4">
              Sua loja de tecnologia de confiança. Produtos de qualidade, 
              preços justos e atendimento especializado.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Produtos</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Serviços</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Categorias</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Ofertas</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Sobre Nós</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Manutenção</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Montagem de PC</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Suporte Técnico</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Instalação</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Consultoria</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 opacity-90" />
                <span className="text-sm opacity-90">Rua da Tecnologia, 123 - Centro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 opacity-90" />
                <span className="text-sm opacity-90">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 opacity-90" />
                <span className="text-sm opacity-90">contato@techstore.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 opacity-90" />
                <span className="text-sm opacity-90">Seg-Sex: 8h-18h | Sáb: 8h-12h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-90 text-sm">
            © 2024 TechStore. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;