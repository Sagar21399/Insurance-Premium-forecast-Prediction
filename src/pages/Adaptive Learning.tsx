import { Card, CardContent } from '@/components/ui/card';
import { Brain, RefreshCw, Shield, TrendingUp } from 'lucide-react';

export default function AdaptiveLearning() {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Pattern Recognition',
      description: 'Continuously analyzes historical and real-time insurance data to identify evolving risk signals and claim trends.'
    },
    {
      icon: RefreshCw,
      title: 'Self-Calibrating Models',
      description: 'Automatically adjusts forecasting parameters as market conditions, customer behavior, and claim patterns change.'
    },
    {
      icon: Shield,
      title: 'Dynamic Risk Assessment',
      description: 'Improves underwriting accuracy by adapting to emerging risks and shifting industry landscapes.'
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Optimization',
      description: 'Enhances predictive performance with continuous learning and instant model refinement.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
            <Brain className="w-10 h-10" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Adaptive Learning
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Models self-calibrate against shifting risk landscapes and emerging claim patterns in real time, ensuring smarter, faster, and more accurate insurance forecasting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="p-4 rounded-2xl bg-blue-100 flex-shrink-0">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Adaptive Learning Matters
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Traditional models become outdated as risk factors evolve. Adaptive learning keeps your forecasting engine current by learning from every new data point, helping insurers respond proactively to market changes, minimize losses, and improve decision-making.
          </p>
        </div>
      </div>
    </div>
  );
}
