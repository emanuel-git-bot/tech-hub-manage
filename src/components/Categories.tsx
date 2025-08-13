import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Smartphone, 
  Laptop, 
  Gamepad2, 
  HardDrive, 
  Wifi,
  ArrowRight
} from "lucide-react";

const categories = [
  {
    icon: Monitor,
    name: "Monitores",
    description: "Monitores para gaming, trabalho e design",
    count: "150+ produtos"
  },
  {
    icon: Laptop,
    name: "Notebooks",
    description: "Laptops para todas as necessidades",
    count: "200+ produtos"
  },
  {
    icon: Smartphone,
    name: "Smartphones",
    description: "Os melhores celulares do mercado",
    count: "300+ produtos"
  },
  {
    icon: Gamepad2,
    name: "Gaming",
    description: "Periféricos e acessórios para games",
    count: "180+ produtos"
  },
  {
    icon: HardDrive,
    name: "Componentes",
    description: "Peças e componentes para PC",
    count: "400+ produtos"
  },
  {
    icon: Wifi,
    name: "Redes",
    description: "Equipamentos de rede e conectividade",
    count: "120+ produtos"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Categorias em <span className="text-primary">Destaque</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore nossa ampla variedade de produtos organizados por categoria. 
            Encontre exatamente o que precisa com facilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-card border-0"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-accent font-medium">
                          {category.count}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:shadow-primary">
            Ver Todas as Categorias
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;