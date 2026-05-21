import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8"
        >
          <Activity className="w-3.5 h-3.5 text-accent" />
          <span className="text-xs font-mono tracking-wider text-muted-foreground uppercase">
            Adaptive ML Framework
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
        >
          <span className="gradient-text">Precision Insurance</span>
          <br />
          <span className="text-foreground">Premium Forecasting</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Harness adaptive machine learning models that continuously evolve with market dynamics, 
          delivering insurance premium predictions with unprecedented accuracy.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="http://localhost:8501/">
          <Button size="lg" className="gradient-primary text-primary-foreground font-semibold px-8 py-6 text-base glow-primary">
            Start Forecasting
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          </Link>
          {/* <Button variant="outline" size="lg" className="px-8 py-6 text-base border-border text-foreground hover:bg-secondary">
            View Documentation
          </Button> */}
        </motion.div>

        {/* Floating metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {[
            { value: "99.4%", label: "Prediction Accuracy" },
            { value: "<12ms", label: "Inference Latency" },
            { value: "2.1M+", label: "Policies Analyzed" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text font-mono">{stat.value}</div>
              <div className="text-xs text-muted-foreground font-mono mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
