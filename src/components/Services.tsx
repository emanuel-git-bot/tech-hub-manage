import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  Shield, 
  Truck, 
  HeadphonesIcon,
  Settings,
  Clock
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Manutenção e Reparo",
    description: "Conserto especializado de computadores, notebooks e periféricos com garantia.",
    features: ["Diagnóstico gratuito", "Peças originais", "Garantia de 6 meses"],
    price: "A partir de R$ 50",
    badge: "Mais Popular"
  },
  {
    icon: Settings,
    title: "Montagem de PC",
    description: "Monte seu PC dos sonhos com nossa expertise e componentes de qualidade.",
    features: ["Consultoria gratuita", "Testes de stress", "Suporte pós-venda"],
    price: "A partir de R$ 100",
    badge: null
  },
  {
    icon: Shield,
    title: "Suporte Técnico",
    description: "Suporte técnico especializado para empresas e usuários domésticos.",
    features: ["Atendimento 24/7", "Suporte remoto", "Consultoria técnica"],
    price: "A partir de R$ 80/h",
    badge: null
  },
  {
    icon: Truck,
    title: "Entrega e Instalação",
    description: "Entregamos e instalamos seus equipamentos na sua casa ou empresa.",
    features: ["Entrega rápida", "Instalação profissional", "Configuração completa"],
    price: "A partir de R$ 30",
    badge: null
  }
];

const Services = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Além de produtos de qualidade, oferecemos serviços especializados 
            para garantir que sua tecnologia funcione perfeitamente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="relative overflow-hidden hover:shadow-primary transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0"
              >
                {service.badge && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    {service.badge}
                  </Badge>
                )}
                
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-sm text-muted-foreground">Preço</span>
                      <div className="font-semibold text-primary">{service.price}</div>
                    </div>
                    <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                      Solicitar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary text-primary-foreground border-0 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <HeadphonesIcon className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-2">Precisa de um Serviço Personalizado?</h3>
              <p className="opacity-90 mb-6">
                Entre em contato conosco para soluções sob medida para sua empresa ou projeto específico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  <Clock className="h-4 w-4 mr-2" />
                  Agendar Consulta
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  <HeadphonesIcon className="h-4 w-4 mr-2" />
                  Falar com Especialista
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;