import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Профессиональная укладка<br />кафельной плитки
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Качество, которое видно в каждом сантиметре
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 animate-scale-in"
            style={{ animationDelay: '0.2s' }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Заказать консультацию
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white" />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Опыт 15+ лет</h3>
                <p className="text-muted-foreground text-lg">
                  Более 500 успешно выполненных проектов. Работаем с любой сложностью.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Гарантия 3 года</h3>
                <p className="text-muted-foreground text-lg">
                  Уверены в качестве своей работы. Предоставляем официальную гарантию.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Идеальное качество</h3>
                <p className="text-muted-foreground text-lg">
                  Используем профессиональные материалы и современное оборудование.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наши работы
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16">
            Каждый проект — это история успеха
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl aspect-square animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/c97bd3f1-b386-404d-9c1b-d0580229d3b2/files/78dbf5fb-83cd-4f2e-a79f-9791790188da.jpg" 
                alt="Ванная комната" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Ванная комната</h3>
                  <p className="text-white/90">Премиум керамика, сложный рисунок</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-square animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <img 
                src="https://cdn.poehali.dev/projects/c97bd3f1-b386-404d-9c1b-d0580229d3b2/files/77c076b3-64a4-4eee-acd6-800ea7d02624.jpg" 
                alt="Кухонный фартук" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Кухонный фартук</h3>
                  <p className="text-white/90">Геометрический узор, безупречные швы</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-square animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://cdn.poehali.dev/projects/c97bd3f1-b386-404d-9c1b-d0580229d3b2/files/b7245529-1204-408f-8d51-2e424720df57.jpg" 
                alt="Напольная плитка" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Напольная плитка</h3>
                  <p className="text-white/90">Крупноформатная керамика, идеальная укладка</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Начните свой проект
            </h2>
            <p className="text-muted-foreground text-lg">
              Оставьте заявку, и мы свяжемся с вами в течение часа
            </p>
          </div>
          <Card className="border-2 animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="text-lg"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="text-lg"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Описание проекта
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-32 text-lg"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Sparkles" size={24} />
            <h3 className="text-2xl font-bold">ПлиткаПро</h3>
          </div>
          <p className="text-background/80 mb-6">
            Профессиональная укладка кафельной плитки с 2009 года
          </p>
          <div className="flex items-center justify-center gap-6 text-background/80">
            <a href="tel:+79991234567" className="hover:text-background transition-colors flex items-center gap-2">
              <Icon name="Phone" size={18} />
              +7 (999) 123-45-67
            </a>
            <a href="mailto:info@plitkpro.ru" className="hover:text-background transition-colors flex items-center gap-2">
              <Icon name="Mail" size={18} />
              info@plitkpro.ru
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
