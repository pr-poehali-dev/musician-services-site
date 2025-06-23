import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AISection from "@/components/AISection";
import OrderForm from "@/components/OrderForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <AISection />
      <OrderForm />
    </div>
  );
};

export default Index;
