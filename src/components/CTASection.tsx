import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();
const CTASection = () => {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl border border-border gradient-card p-12 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <motion.div
            className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/5 blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="relative z-10">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-accent mb-4 block">
              Get Started
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Ready to transform your
              <br />
              <span className="gradient-text">underwriting accuracy?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Deploy adaptive premium forecasting models in production within days, not months. 
              Full API access and actuarial tooling included.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gradient-primary text-primary-foreground font-semibold px-8 py-6 text-base glow-primary"
                onClick={() => window.location.href ="http://localhost:8501"}
                 > 
                Request Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              {/* <Button variant="outline" size="lg" className="px-8 py-6 text-base border-border text-foreground hover:bg-secondary">
                API Reference
              </Button> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
