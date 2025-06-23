import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    genre: "",
    description: "",
    budget: "",
  });

  const services = [
    "Аранжировка для разных жанров",
    "Создание минусовок",
    "Переаранжировка ИИ-музыки",
  ];

  const genres = [
    "Поп",
    "Рок",
    "Джаз",
    "Электроника",
    "Классика",
    "Хип-хоп",
    "R&B",
    "Кантри",
    "Фолк",
    "Другое",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 px-4 music-gradient">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
            Заказать <span className="text-music-orange">Аранжировку</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Расскажите о своем проекте, и я создам для вас уникальную
            музыкальную композицию
          </p>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
          <CardHeader>
            <CardTitle className="font-heading text-2xl text-center flex items-center justify-center">
              <Icon name="Music" size={24} className="mr-2 text-music-purple" />
              Форма заказа
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              Заполните форму, и я свяжусь с вами в течение 2 часов
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Как к вам обращаться?"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Тип услуги *</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Жанр музыки</Label>
                  <Select
                    value={formData.genre}
                    onValueChange={(value) =>
                      setFormData({ ...formData, genre: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите жанр" />
                    </SelectTrigger>
                    <SelectContent>
                      {genres.map((genre) => (
                        <SelectItem key={genre} value={genre}>
                          {genre}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Описание проекта *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Расскажите подробнее о вашем проекте, желаемом стиле, настроении композиции..."
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Примерный бюджет</Label>
                <Input
                  id="budget"
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  placeholder="Например: 5000-10000 руб"
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full music-gradient text-white hover:opacity-90 font-heading font-semibold text-lg py-6"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </div>

              <div className="text-center text-sm text-gray-500 mt-4">
                <Icon name="Shield" size={16} className="inline mr-1" />
                Ваши данные защищены и не передаются третьим лицам
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <Icon name="Clock" size={32} className="mx-auto mb-3" />
            <h3 className="font-heading font-semibold mb-2">Быстрый ответ</h3>
            <p className="text-sm text-white/80">Отвечаю в течение 2 часов</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <Icon name="Star" size={32} className="mx-auto mb-3" />
            <h3 className="font-heading font-semibold mb-2">Качество</h3>
            <p className="text-sm text-white/80">100% качественный результат</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <Icon name="Headphones" size={32} className="mx-auto mb-3" />
            <h3 className="font-heading font-semibold mb-2">Поддержка</h3>
            <p className="text-sm text-white/80">Помогу даже после сдачи</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
