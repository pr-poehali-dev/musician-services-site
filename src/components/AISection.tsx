import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const AISection = () => {
  const advantages = [
    {
      icon: "Sparkles",
      title: "ИИ + Человек",
      description: "Использую лучшее от технологий и добавляю живые эмоции",
    },
    {
      icon: "Zap",
      title: "Быстрый результат",
      description: "Черновая версия готова за несколько часов",
    },
    {
      icon: "Heart",
      title: "Живое звучание",
      description: "Превращаю роботизированную музыку в эмоциональную",
    },
    {
      icon: "Settings",
      title: "Гибкая настройка",
      description: "Подстраиваю под ваш стиль и предпочтения",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-music-purple/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              Работа с <span className="text-music-purple">ИИ-музыкой</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Искусственный интеллект отлично генерирует музыку, но часто ей не
              хватает души. Я беру лучшее от ИИ и добавляю человеческие эмоции,
              создавая уникальные композиции.
            </p>

            <div className="space-y-4 mb-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 rounded-lg music-gradient">
                    <Icon
                      name={advantage.icon as any}
                      size={20}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-gray-900 mb-1">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="music-gradient text-white hover:opacity-90 font-heading font-semibold"
            >
              <Icon name="Cpu" size={20} className="mr-2" />
              Попробовать с ИИ
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-music-purple">
              <CardContent className="p-0">
                <div className="flex items-center mb-3">
                  <Icon
                    name="Upload"
                    size={24}
                    className="text-music-purple mr-3"
                  />
                  <h3 className="font-heading font-semibold text-lg">
                    Загружаете ИИ-трек
                  </h3>
                </div>
                <p className="text-gray-600">
                  Присылаете музыку, созданную любым ИИ-сервисом
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-music-orange">
              <CardContent className="p-0">
                <div className="flex items-center mb-3">
                  <Icon
                    name="Wand2"
                    size={24}
                    className="text-music-orange mr-3"
                  />
                  <h3 className="font-heading font-semibold text-lg">
                    Анализ и улучшение
                  </h3>
                </div>
                <p className="text-gray-600">
                  Изучаю структуру и добавляю живые инструменты
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-music-blue">
              <CardContent className="p-0">
                <div className="flex items-center mb-3">
                  <Icon
                    name="Download"
                    size={24}
                    className="text-music-blue mr-3"
                  />
                  <h3 className="font-heading font-semibold text-lg">
                    Готовый результат
                  </h3>
                </div>
                <p className="text-gray-600">
                  Получаете эмоциональную и живую композицию
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
