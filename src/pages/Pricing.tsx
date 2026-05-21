import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '29',
      period: '/month',
      description: 'Perfect for small insurance agencies and startups.',
      features: [
        'Up to 1,000 forecasts/month',
        'Basic analytics dashboard',
        'Email support',
        'Standard reporting tools'
      ]
    },
    {
      name: 'Professional',
      price: '99',
      period: '/month',
      description: 'Ideal for growing agencies and mid-size businesses.',
      features: [
        'Up to 10,000 forecasts/month',
        'Advanced analytics & insights',
        'Priority email support',
        'Custom reports',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      price: '299',
      period: '/month',
      description: 'Perfect for large enterprises and agencies.',
      features: [
        'Unlimited forecasts',
        'Full analytics suite',
        '24/7 phone & email support',
        'White-label reporting',
        'Dedicated account manager',
        'Custom integrations'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-6">Simple, transparent pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Choose the plan that works for your agency. No hidden fees, cancel anytime.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={plan.name} className={index === 1 ? 'ring-2 ring-primary border-transparent shadow-2xl' : ''}>
              {index === 1 && (
                <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">Most popular</Badge>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="text-4xl font-bold">{plan.price}<span className="text-2xl font-normal text-muted-foreground">{plan.period}</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" size="lg">Get started</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
