import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden music-gradient">
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Floating musical elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <Icon name="Music" size={60} className="text-white" />
      </div>
      <div
        className="absolute top-40 right-20 animate-float opacity-30"
        style={{ animationDelay: "2s" }}
      >
        <Icon name="Headphones" size={40} className="text-white" />
      </div>
      <div
        className="absolute bottom-32 left-20 animate-float opacity-25"
        style={{ animationDelay: "4s" }}
      >
        <Icon name="Mic" size={50} className="text-white" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-heading font-bold text-5xl md:text-7xl text-white mb-6 animate-fade-in">
          Музыкальная <span className="text-music-orange">Магия</span>
        </h1>
        <p
          className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in font-medium"
          style={{ animationDelay: "0.2s" }}
        >
          Профессиональная аранжировка для любого жанра.
          <br />
          От классики до ИИ-композиций
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            size="lg"
            className="bg-white text-music-purple hover:bg-white/90 font-heading font-semibold text-lg px-8 py-4"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Послушать работы
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-music-purple font-heading font-semibold text-lg px-8 py-4"
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Заказать аранжировку
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/90">
          <div className="text-center">
            <div className="text-3xl font-bold font-heading">500+</div>
            <div className="text-sm uppercase tracking-wider">
              Готовых аранжировок
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold font-heading">50+</div>
            <div className="text-sm uppercase tracking-wider">
              Жанров музыки
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold font-heading">100%</div>
            <div className="text-sm uppercase tracking-wider">
              Качественный результат
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
