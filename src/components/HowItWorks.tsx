import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Data Ingestion",
    description: "Ingest policyholder data, claims history, and macro-economic indicators through secure pipelines.",
  },
  {
    number: "02",
    title: "Feature Engineering",
    description: "Automated feature extraction across temporal, spatial, and behavioral dimensions with drift detection.",
  },
  {
    number: "03",
    title: "Model Training",
    description: "Ensemble models train on rolling windows with Bayesian hyperparameter optimization.",
  },
  {
    number: "04",
    title: "Premium Output",
    description: "Calibrated premium recommendations with confidence intervals and regulatory compliance scores.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-accent mb-4 block">
            Pipeline
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            From data to <span className="gradient-text">decision</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative flex items-start mb-16 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-1 z-10 glow-primary" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <span className="font-mono text-sm text-primary font-semibold">{step.number}</span>
                <h3 className="text-xl font-bold text-foreground mt-1 mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
