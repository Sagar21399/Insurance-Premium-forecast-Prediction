import { useMemo } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  ShieldCheck,
  Gauge,
  Database,
  Sparkles,
  BarChart3,
  Lock,
  Rocket,
  FileText,
  Search,
  ChevronRight,
} from "lucide-react";

export default function Docs() {
  const sections = useMemo(
    () => [
      {
        id: "overview",
        title: "Insurance Forecasting: What we predict",
        badge: "Overview",
        icon: BookOpen,
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Insurance forecasting is the process of predicting future outcomes—most commonly premiums
              or loss/risk signals—using historical policies, claims, exposures, and relevant market factors.
              Forecast Friend focuses on producing <span className="font-medium text-foreground">decision-ready</span>
              predictions that insurers can use for underwriting, reserving, and renewal pricing.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Card className="bg-card/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-primary" /> Forecast horizons
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                  Monthly, quarterly, or custom windows—designed for multi-horizon planning.
                </CardContent>
              </Card>

              <Card className="bg-card/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary" /> Explainable outputs
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                  Each prediction includes feature attribution patterns to support transparency and review.
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 rounded-2xl border bg-secondary/30 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 text-primary">
                    <Sparkles className="w-4 h-4" />
                  </span>
                </div>
                <div>
                  <p className="font-medium">Goal</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Produce accurate, stable forecasts under changing risk conditions—without manual re-tuning
                    every time the market shifts.
                  </p>
                </div>
              </div>
            </div>
          </>
        ),
      },
      {
        id: "data",
        title: "Data requirements & preparation",
        badge: "Data",
        icon: Database,
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              High-quality inputs are essential for reliable forecasting. Below is a practical checklist of the
              fields insurers typically provide, plus the preprocessing steps that improve model performance.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Card className="bg-card/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold flex items-center gap-2">
                    <Database className="w-4 h-4 text-primary" /> Core insurance data
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5" /> Policy attributes (coverage type,
                      limits, deductibles, term)
                    </li>
                    <li className="flex gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5" /> Exposure signals (earned premium,
                      exposure duration)
                    </li>
                    <li className="flex gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5" /> Claims history (paid/incurred,
                      development patterns)
                    </li>
                    <li className="flex gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5" /> Time metadata (effective dates,
                      underwriting period)
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold flex items-center gap-2">
                    <Search className="w-4 h-4 text-primary" /> Data quality checks
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5" /> Missing coverage fields & invalid
                      numeric values
                    </li>
                    <li className="flex gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5" /> Outlier exposure or abnormal claim
                      amounts
                    </li>
                    <li className="flex gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5" /> Seasonality alignment by calendar
                      conventions
                    </li>
                    <li className="flex gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5" /> Segment completeness for fair
                      comparisons
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 rounded-2xl border bg-card/60 p-4">
              <p className="font-medium">Tip</p>
              <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                If your portfolio has frequent product revisions, include version identifiers so the model can
                learn systematic shifts rather than treating them as noise.
              </p>
            </div>
          </>
        ),
      },
      {
        id: "features",
        title: "Feature engineering for actuarial signals",
        badge: "Features",
        icon: Sparkles,
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              We transform raw policy/claims tables into modeling-ready representations.
              The goal is to capture time dynamics (development, seasonality, lag effects) and preserve signal
              across segments.
            </p>

            <div className="mt-6 grid gap-4">
              {[
                {
                  title: "Exposure normalization",
                  desc: "Convert raw premium into exposure-adjusted quantities so segments remain comparable over time.",
                },
                {
                  title: "Time-windowing & development lag",
                  desc: "Aggregate features into consistent underwriting and development windows; model claim maturation patterns.",
                },
                {
                  title: "Categorical encoding",
                  desc: "Encode coverage types, territories, and rating factors using robust techniques for sparse categories.",
                },
                {
                  title: "Seasonality treatment",
                  desc: "Account for recurring calendar patterns so short-term forecasts don’t overfit transient spikes.",
                },
              ].map((f) => (
                <Card key={f.title} className="bg-card/60">
                  <CardContent className="p-5">
                    <p className="font-semibold text-foreground">{f.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">{f.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ),
      },
      {
        id: "models",
        title: "Modeling approach (adaptive & multi-horizon)",
        badge: "Models",
        icon: BarChart3,
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Forecast Friend’s modeling strategy supports both accuracy and operational stability.
              This includes multi-horizon prediction windows, and adaptive learning so the forecast remains aligned
              when risk patterns evolve.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Card className="bg-card/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold">Multi-horizon forecasting</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                  Predict from short planning cycles up to longer-tail liability projections—so underwriting and
                  reserving decisions share a consistent outlook.
                </CardContent>
              </Card>

              <Card className="bg-card/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold">Adaptive learning</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                  Continuously recalibrate based on new evidence, helping reduce manual re-training and keeping
                  performance strong during regime shifts.
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 rounded-2xl border bg-secondary/30 p-4">
              <p className="font-medium">Explainability mindset</p>
              <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                Forecasts are paired with attribution insights so analysts can understand which drivers are
                contributing most for each forecast segment.
              </p>
            </div>
          </>
        ),
      },
      {
        id: "evaluation",
        title: "Training, evaluation & validation",
        badge: "Evaluation",
        icon: Gauge,
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Forecast models must be evaluated using methods that reflect how the model is used in production.
              We recommend rolling-origin backtests to estimate realistic performance.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Card className="bg-card/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold">Backtesting</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5" /> Rolling-origin evaluation
                    </li>
                    <li className="flex gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5" /> Segment-level comparisons
                    </li>
                    <li className="flex gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5" /> Out-of-time validation
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold">Metrics</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5" /> Error metrics (MAE/RMSE/MAPE)
                    </li>
                    <li className="flex gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5" /> Calibration for rate predictions
                    </li>
                    <li className="flex gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5" /> Stability across time windows
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </>
        ),
      },
      {
        id: "inference",
        title: "Inference & prediction workflow",
        badge: "Inference",
        icon: FileText,
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Inference turns validated inputs into forecast outputs. In production, teams typically run
              forecasts on a schedule and compare against observed outcomes to monitor drift.
            </p>

            <div className="mt-6 grid gap-4">
              {[
                {
                  step: "1",
                  title: "Submit forecast request",
                  desc: "Provide policy segment descriptors and the target horizon window.",
                },
                {
                  step: "2",
                  title: "Model selection & execution",
                  desc: "Use versioned models to keep results reproducible across runs.",
                },
                {
                  step: "3",
                  title: "Receive prediction outputs",
                  desc: "Get predicted values plus confidence information and segment breakdowns.",
                },
                {
                  step: "4",
                  title: "Review & monitor",
                  desc: "Track accuracy, calibration, and feature attribution stability over time.",
                },
              ].map((s) => (
                <Card key={s.step} className="bg-card/60">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-semibold">
                        {s.step}
                      </div>
                      <div>
                        <p className="font-semibold">{s.title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-1">{s.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6">
              <Card className="bg-card/60">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-semibold">Example output (illustrative)</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-secondary/20 rounded-xl border p-4 overflow-auto text-xs text-muted-foreground">
{`{
  "model": "forecast-friend:v1.4.2",
  "horizon": "2026-01..2026-03",
  "segment": {
    "product": "Auto",
    "territory": "West",
    "risk_tier": "A"
  },
  "prediction": {
    "premium_rate": 0.0342,
    "expected_premium": 128430.75,
    "confidence_interval": {
      "p10": 118900.10,
      "p90": 139250.40
    }
  },
  "attribution": [
    {"feature": "recent_claim_freq", "impact": +0.012},
    {"feature": "exposure_trend", "impact": -0.007}
  ]
}`}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </>
        ),
      },
      {
        id: "api",
        title: "API contract (documentation template)",
        badge: "API",
        icon: FileText,
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              This section documents the API shape you can expect to integrate with.
              If your backend implementation differs, treat this as a guide and we’ll align the contract.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Card className="bg-card/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold">POST /v1/forecasts</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                  Creates a forecast for one or more segments over a target horizon.
                </CardContent>
              </Card>
              <Card className="bg-card/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold">GET /v1/forecasts/:id</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                  Retrieves stored forecast outputs and metadata for reproducibility.
                </CardContent>
              </Card>
            </div>

            <div className="mt-6">
              <Card className="bg-card/60">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-semibold">Request example (illustrative)</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-secondary/20 rounded-xl border p-4 overflow-auto text-xs text-muted-foreground">
{`{
  "horizon": {"start": "2026-01-01", "end": "2026-03-31"},
  "segments": [
    {"product": "Auto", "territory": "West", "risk_tier": "A"}
  ],
  "inputs": {
    "exposure_months": 18,
    "training_cutoff": "2025-12-31"
  }
}`}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </>
        ),
      },
      {
        id: "security",
        title: "Authentication & security",
        badge: "Security",
        icon: Lock,
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Production integrations require secure access patterns. Forecast Friend follows standard
              practices around tokens, auditability, and least-privilege permissions.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Card className="bg-card/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold">JWT / API keys</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                  Use scoped credentials to restrict access to forecast creation and retrieval.
                </CardContent>
              </Card>
              <Card className="bg-card/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold">Audit logs</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                  Track who requested forecasts, when models were run, and which model versions were used.
                </CardContent>
              </Card>
            </div>
          </>
        ),
      },
      {
        id: "deployment",
        title: "Deployment guide (inference service)",
        badge: "Production",
        icon: Rocket,
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Deployment turns your forecasting workflow into a reliable production capability.
              Focus on monitoring, drift detection, and versioned rollouts.
            </p>

            <div className="mt-6 grid gap-4">
              {[
                {
                  title: "Run model updates safely",
                  desc: "Use versioned models and blue/green rollouts or canary releases to reduce risk.",
                },
                {
                  title: "Monitor drift",
                  desc: "Track prediction error, calibration, and feature distribution changes over time.",
                },
                {
                  title: "Operational dashboards",
                  desc: "Surface key accuracy indicators and failure rates so analysts can respond quickly.",
                },
              ].map((x) => (
                <Card key={x.title} className="bg-card/60">
                  <CardContent className="p-5">
                    <p className="font-semibold">{x.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">{x.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ),
      },
      {
        id: "faq",
        title: "FAQ & troubleshooting",
        badge: "FAQ",
        icon: ShieldCheck,
        content: (
          <>
            <div className="space-y-4">
              {[
                {
                  q: "Why are my forecasts unstable across time?",
                  a: "Most instability comes from data changes: missing fields, exposure definition shifts, or segment composition changes. Verify preprocessing parity and apply segment-aware normalization.",
                },
                {
                  q: "How should we evaluate multi-horizon predictions?",
                  a: "Use horizon-specific metrics and rolling-origin backtests. Track both raw error and calibration per horizon so short- and long-tail windows are not blended together.",
                },
                {
                  q: "Do you support explainability for regulatory review?",
                  a: "Forecast outputs include attribution patterns intended for analyst review. Confirm your internal reporting format and we can map attributions to your transparency requirements.",
                },
              ].map((item) => (
                <div key={item.q} className="rounded-2xl border bg-card/60 p-5">
                  <p className="font-semibold">{item.q}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">{item.a}</p>
                </div>
              ))}
            </div>
          </>
        ),
      },
    ],
    []
  );

  const toc = useMemo(
    () => sections.map((s) => ({ id: s.id, title: s.title, badge: s.badge })),
    [sections]
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="relative container mx-auto px-4 sm:px-6 py-14 sm:py-18">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 border border-border">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-xs font-mono tracking-wider uppercase text-muted-foreground">
                  Insurance forecasting documentation
                </span>
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Documentation built for <span className="gradient-text">production forecasting</span>
              </h1>
              <p className="mt-4 text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                Learn how premium and risk forecasts are prepared, modeled, evaluated, and deployed—end to end.
              </p>
            </div>

            <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-start">
              {/* Table of contents */}
              <aside className="lg:sticky lg:top-24">
                <div className="rounded-3xl border bg-card/60 shadow-sm">
                  <div className="p-5 border-b flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold">Table of Contents</p>
                      <p className="text-xs text-muted-foreground">Jump to a section</p>
                    </div>
                    <Badge variant="secondary" className="hidden sm:inline-flex">
                      {sections.length} topics
                    </Badge>
                  </div>
                  <div className="p-3">
                    <div className="space-y-1">
                      {toc.map((t) => (
                        <a
                          key={t.id}
                          href={`#${t.id}`}
                          className={cn(
                            "group flex items-center justify-between gap-3 rounded-xl px-3 py-2",
                            "text-sm text-muted-foreground hover:text-foreground",
                            "hover:bg-secondary/50 transition-colors"
                          )}
                        >
                          <div className="min-w-0">
                            <div className="truncate font-medium">{t.title}</div>
                            <div className="text-xs text-muted-foreground/80 mt-0.5">{t.badge}</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-muted-foreground/60 group-hover:text-primary transition-colors" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main content */}
              <main className="space-y-8 pb-10">
                {sections.map((s) => {
                  const Icon = s.icon;
                  return (
                    <section key={s.id} id={s.id} className="scroll-mt-28">
                      <Card className="rounded-3xl overflow-hidden">
                        <CardHeader className="p-6 sm:p-8">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                                <Icon className="w-6 h-6" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <Badge variant="secondary">{s.badge}</Badge>
                                </div>
                                <CardTitle className="text-2xl sm:text-3xl mt-2">{s.title}</CardTitle>
                              </div>
                            </div>
                            <div className="hidden sm:block">
                              <a href={`#${s.id}`} className="text-sm text-muted-foreground hover:text-foreground">
                                Copy link
                              </a>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-6 sm:p-8 pt-0">
                          {s.content}
                        </CardContent>
                      </Card>
                      <Separator className="my-8" />
                    </section>
                  );
                })}

                <div className="rounded-3xl border bg-gradient-to-br from-primary/10 via-transparent to-transparent p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                      <p className="text-sm font-mono tracking-wider uppercase text-muted-foreground">Next step</p>
                      <h2 className="text-2xl sm:text-3xl font-bold mt-2">Ready to run forecasts on your portfolio?</h2>
                      <p className="text-muted-foreground mt-2 leading-relaxed">
                        Use these documentation sections as a baseline for integration planning, evaluation design,
                        and production rollout.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Button asChild>
                        <a href="/pricing">View Pricing</a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="/adaptive-learning">Adaptive Learning</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

