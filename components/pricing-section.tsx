"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small teams",
    price: "Free",
    period: "",
    icon: Zap,
    badge: null,
    features: [
      "5 meetings per month",
      "Basic transcription",
      "Simple action items",
      "7-day data retention",
      "Email support"
    ],
    cta: "Get Started",
    ctaVariant: "outline" as const,
    popular: false
  },
  {
    name: "Professional",
    description: "Advanced features for growing teams",
    price: "$29",
    period: "/month",
    icon: Crown,
    badge: "Most Popular",
    features: [
      "Unlimited meetings",
      "AI-powered insights",
      "Smart summaries",
      "Action item tracking",
      "Team collaboration",
      "30-day data retention",
      "Priority support",
      "Calendar integrations"
    ],
    cta: "Start Free Trial",
    ctaVariant: "default" as const,
    popular: true
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations",
    price: "Custom",
    period: "",
    icon: Rocket,
    badge: null,
    features: [
      "Everything in Professional",
      "Custom AI models",
      "Advanced analytics",
      "Single sign-on (SSO)",
      "Custom integrations",
      "Unlimited data retention",
      "24/7 dedicated support",
      "SLA guarantees"
    ],
    cta: "Contact Sales",
    ctaVariant: "outline" as const,
    popular: false
  }
];

export function PricingSection() {
  console.log("PricingSection rendering");

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-brand-500/20 rounded-full px-4 py-2 mb-6"
          >
            <Crown className="w-4 h-4 text-brand-500" />
            <span className="text-sm font-medium text-slate-700">Simple Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Choose Your
            <br />
            <span className="gradient-text">Perfect Plan</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Start free and scale as you grow. All plans include core AI features 
            and unlimited team members.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'scale-105' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-accent text-white px-4 py-1 text-sm font-semibold">
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <Card className={`p-8 h-full glass-card hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'border-brand-500 border-2' : ''
              }`}>
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    plan.popular ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <plan.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                  <p className="text-slate-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    {plan.period && (
                      <span className="text-slate-600 text-lg">{plan.period}</span>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full py-3 font-semibold rounded-xl transition-all duration-300 ${
                    plan.ctaVariant === 'default' 
                      ? 'bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl' 
                      : 'border-2 border-slate-300 hover:border-brand-500 bg-white hover:bg-slate-50'
                  }`}
                  variant={plan.ctaVariant}
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}