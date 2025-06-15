"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Play, Sparkles, Zap, Calendar } from "lucide-react";

export function HeroSection() {
  console.log("HeroSection rendering");

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-500 rounded-full blur-3xl opacity-10 floating-element"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-brand-gradient rounded-full blur-3xl opacity-10 floating-element" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-brand-500/20 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span className="text-sm font-medium text-slate-700">AI-Powered Meeting Intelligence</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Turn Every Meeting Into
            <br />
            <span className="gradient-text">Actionable Insights</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Automatically capture, transcribe, and organize your meetings with AI. 
            Never miss important details or action items again.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-slate-300 hover:border-brand-500 px-8 py-4 text-lg font-semibold rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Demo Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass-card p-8 rounded-3xl">
              <div className="bg-gradient-hero rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="text-left">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="w-6 h-6" />
                    <div>
                      <h3 className="font-semibold">Weekly Team Sync</h3>
                      <p className="text-white/80 text-sm">March 15, 2024 • 2:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <p className="text-sm text-white/90 mb-2">🎯 Action Item</p>
                      <p className="font-medium">Sarah to review Q2 budget by Friday</p>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <p className="text-sm text-white/90 mb-2">💡 Key Insight</p>
                      <p className="font-medium">Customer retention improved by 15% this quarter</p>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <p className="text-sm text-white/90 mb-2">⏰ Next Meeting</p>
                      <p className="font-medium">Follow-up scheduled for March 22nd</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}