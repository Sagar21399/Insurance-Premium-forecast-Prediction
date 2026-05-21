export default function Platform() {
  const features = [
    {
      title: "AI-Powered Analytics",
      description: "Gain real-time insights from your insurance data using intelligent forecasting models.",
      icon: "📊",
    },
    {
      title: "Risk Assessment",
      description: "Evaluate policy risks accurately with advanced predictive algorithms.",
      icon: "🛡️",
    },
    {
      title: "Automated Reporting",
      description: "Generate detailed reports instantly for better decision-making and compliance.",
      icon: "📑",
    },
    {
      title: "Scalable Infrastructure",
      description: "Built to handle growing datasets and enterprise-level workloads.",
      icon: "⚡",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Our Platform</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A powerful insurance forecasting platform designed to help businesses
            make smarter decisions with data-driven insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card border rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform?</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our platform combines cutting-edge artificial intelligence, predictive
            analytics, and an intuitive user experience to transform the way
            insurance companies analyze data, assess risk, and forecast future trends.
          </p>
        </div>
      </div>
    </div>
  );
}
