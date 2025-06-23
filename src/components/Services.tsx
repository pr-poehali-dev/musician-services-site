import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Music2",
      title: "Аранжировка для разных жанров",
      description:
        "Создаю уникальные аранжировки для рока, джаза, поп-музыки, электроники и любых других жанров",
      features: [
        "Живые инструменты",
        "Современное звучание",
        "Быстрое выполнение",
      ],
      gradient: "music-gradient",
    },
    {
      icon: "Radio",
      title: "Создание минусовок",
      description:
        "Профессиональные минусовки для выступлений, записи и репетиций с высоким качеством звука",
      features: [
        "Студийное качество",
        "Любая тональность",
        "Готово за 2-3 дня",
      ],
      gradient: "music-gradient-orange",
    },
    {
      icon: "Bot",
      title: "Переаранжировка ИИ-музыки",
      description:
        "Превращаю музыку, созданную ИИ, в живые и эмоциональные композиции с человеческим подходом",
      features: ["Живое звучание", "Эмоциональность", "Уникальный стиль"],
      gradient: "music-gradient-blue",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            Мои <span className="text-music-purple">Услуги</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Превращаю ваши музыкальные идеи в профессиональные композиции с
            душой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden"
            >
              <div className={`h-2 ${service.gradient}`}></div>
              <CardHeader className="text-center pb-4">
                <div
                  className={`inline-flex p-4 rounded-full ${service.gradient} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <CardTitle className="font-heading text-xl mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-music-purple mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${service.gradient} text-white border-0 hover:opacity-90`}
                >
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
