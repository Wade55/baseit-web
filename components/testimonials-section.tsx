"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechFlow Inc.",
    content: "This tool has completely transformed how our team handles meetings. We've reduced follow-up time by 80% and never miss action items anymore.",
    rating: 5,
    initials: "SC"
  },
  {
    name: "Marcus Rodriguez",
    role: "Engineering Lead",
    company: "DataSync Solutions",
    content: "The AI insights are incredibly accurate. It picks up on nuances and decisions that I sometimes miss in the moment. Game-changer for our sprint planning.",
    rating: 5,
    initials: "MR"
  },
  {
    name: "Emily Watson",
    role: "Operations Director",
    company: "GrowthLab",
    content: "Finally, a meeting tool that actually makes meetings productive. The automated summaries save me hours each week, and the action tracking is brilliant.",
    rating: 5,
    initials: "EW"
  },
  {
    name: "David Kim",
    role: "Sales Manager",
    company: "CloudVenture",
    content: "Our client meetings are so much more organized now. The AI captures everything perfectly, and I can focus entirely on the conversation.",
    rating: 5,
    initials: "DK"
  },
  {
    name: "Lisa Thompson",
    role: "HR Director",
    company: "InnovateCorp",
    content: "The sentiment analysis feature has been invaluable for our team check-ins. It helps us identify issues early and maintain a positive team culture.",
    rating: 5,
    initials: "LT"
  },
  {
    name: "Alex Foster",
    role: "Consultant",
    company: "Strategic Solutions",
    content: "As someone who has multiple client meetings daily, this tool has become indispensable. The search functionality is phenomenal.",
    rating: 5,
    initials: "AF"
  }
];

export function TestimonialsSection() {
  console.log("TestimonialsSection rendering");

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
            <Star className="w-4 h-4 text-brand-500" />
            <span className="text-sm font-medium text-slate-700">Customer Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Loved by Teams
            <br />
            <span className="gradient-text">Worldwide</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            See how teams across industries are transforming their meeting culture 
            and boosting productivity with our AI-powered platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full glass-card hover:shadow-xl transition-all duration-300 group">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-brand-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-slate-700 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-brand-500 text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                    <p className="text-sm text-brand-500 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}