"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Zap, ArrowRight, Users, Calendar } from "lucide-react";

export function CTASection() {
  console.log("CTASection rendering");

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500 rounded-full blur-3xl opacity-20 floating-element"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-gradient rounded-full blur-3xl opacity-20 floating-element" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="glass-card p-12 text-center rounded-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Ready to Transform Your Meetings?</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Start Your Journey to
                <br />
                <span className="gradient-text">Smarter Meetings Today</span>
              </h2>
              
              <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                Join thousands of teams already using AI to make their meetings more productive, 
                organized, and actionable. Try it free for 14 days.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-slate-300 hover:border-brand-500 px-8 py-4 text-lg font-semibold rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-200"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Instant Setup</h3>
                <p className="text-sm text-slate-600">Start in under 2 minutes</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">No Credit Card</h3>
                <p className="text-sm text-slate-600">Free trial with full access</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">14-Day Trial</h3>
                <p className="text-sm text-slate-600">Cancel anytime, no questions</p>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}