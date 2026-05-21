import { motion } from "framer-motion";
import { Brain, TrendingUp, Shield, Layers, Zap, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
// import { NavLink } from "./NavLink";
// import { cn } from "@/lib/utils";
// import { Button } from "react-day-picker";

const features = [
  {
    icon: Brain,
    title: "Adaptive Learning",
    description: "Models self-calibrate against shifting risk landscapes and emerging claim patterns in real time.",
    path: "/adaptive-learning",

  },
  {
    icon: TrendingUp,
    title: "Temporal Forecasting",
    description: "Multi-horizon prediction windows from quarterly cycles to long-tail liability projections.",
    path: "/temporal-forecasting",
  },
  {
    icon: Shield,
    title: "Risk Stratification",
    description: "Granular policyholder segmentation using ensemble gradient methods across 200+ risk features.",
    path: "/risk-stratification",
  },
  {
    icon: Layers,
    title: "Model Stacking",
    description: "Hierarchical ensemble architecture blending XGBoost, neural nets, and actuarial priors.",
    path: "/model-stacking",
  },
  {
    icon: Zap,
    title: "Real-Time Inference",
    description: "Sub-millisecond scoring at the edge, enabling instant premium quotes at point of sale.",
    path: "/real-time-inference",
  },
  {
    icon: BarChart3,
    title: "Explainability Engine",
    description: "SHAP-powered attribution maps for every prediction, meeting regulatory transparency requirements.",
    path: "/explainability-engine",
  },
];

const Features = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-accent mb-4 block">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Engineered for
            <span className="gradient-text"> actuarial precision</span>
          </h2>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
         {features.map((feature, i) => (
  <Link key={feature.title} to={feature.path}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="group gradient-card rounded-xl border border-border p-7 
                 hover:border-primary/30 transition-all duration-300 
                 hover:glow-primary cursor-pointer h-full"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
        <feature.icon className="w-5 h-5 text-primary" />
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2">
        {feature.title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  </Link>
))}
        </div>
      </div>
    </section>
  );
};

export default Features;
