"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Mic, 
  BrainCircuit, 
  CheckSquare, 
  Users, 
  FileText, 
  Zap,
  Target,
  Search,
  Calendar
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Auto-Transcription",
    description: "High-accuracy speech-to-text with speaker identification and timestamp marking.",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Analysis",
    description: "Intelligent extraction of key topics, decisions, and sentiment analysis.",
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: CheckSquare,
    title: "Smart Action Items",
    description: "Automatically identify and track action items with assigned owners and due dates.",
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share meeting insights with team members and track progress together.",
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    icon: FileText,
    title: "Smart Summaries",
    description: "Generate concise meeting summaries with key decisions and next steps.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50"
  },
  {
    icon: Search,
    title: "Universal Search",
    description: "Find any meeting content instantly with AI-powered semantic search.",
    color: "text-pink-500",
    bgColor: "bg-pink-50"
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description: "Monitor progress on objectives and key results discussed in meetings.",
    color: "text-teal-500",
    bgColor: "bg-teal-50"
  },
  {
    icon: Calendar,
    title: "Calendar Integration",
    description: "Seamlessly connects with Google Calendar, Outlook, and Zoom.",
    color: "text-red-500",
    bgColor: "bg-red-50"
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Get instant insights as your meeting progresses with live AI analysis.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50"
  }
];

export function FeaturesSection() {
  console.log("FeaturesSection rendering");

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
            <BrainCircuit className="w-4 h-4 text-brand-500" />
            <span className="text-sm font-medium text-slate-700">Powerful Features</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Everything You Need for
            <br />
            <span className="gradient-text">Productive Meetings</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            From real-time transcription to AI-powered insights, our platform transforms 
            how teams capture and act on meeting information.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full glass-card hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-slate-900">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}