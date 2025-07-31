import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Brain, Target, MessageCircle, Trophy, Star, CheckCircle, Clock, Users, Zap, BookOpen, Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [progress, setProgress] = useState(0);

  const stats = [
    { label: "Active Learners", value: "25,000+", icon: Users },
    { label: "Courses Completed", value: "180,000+", icon: BookOpen },
    { label: "Success Rate", value: "94%", icon: TrendingUp },
    { label: "Average Rating", value: "4.9★", icon: Star },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Computer Science Student",
      content: "Innolearn's AI tutoring helped me master React in just 3 weeks!",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Career Switcher",
      content: "The personalized learning path made transitioning to tech seamless.",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      role: "Frontend Developer",
      content: "Best learning platform I've used. The AI feedback is incredibly helpful.",
      rating: 5,
    },
  ];

  const agents = [
    {
      name: "Student Profiling",
      description: "Discover your learning style and preferences",
      icon: GraduationCap,
      path: "/agents/profiling",
      color: "bg-primary",
      preview: "Take a 5-minute quiz to get started",
    },
    {
      name: "Content Recommendation",
      description: "Get personalized learning modules",
      icon: Brain,
      path: "/agents/recommendation",
      color: "bg-accent",
      preview: "AI-curated content just for you",
    },
    {
      name: "Assessment & Feedback",
      description: "Track progress with smart assessments",
      icon: Target,
      path: "/agents/assessment",
      color: "bg-primary-light",
      preview: "Real-time progress tracking",
    },
    {
      name: "AI Tutoring",
      description: "Get help from your personal AI tutor",
      icon: MessageCircle,
      path: "/agents/tutoring",
      color: "bg-primary-dark",
      preview: "24/7 intelligent assistance",
    },
    {
      name: "Engagement & Motivation",
      description: "Stay motivated with streaks and achievements",
      icon: Trophy,
      path: "/agents/engagement",
      color: "bg-accent",
      preview: "Gamified learning experience",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [stats.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center relative">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8 animate-float">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-orange">
              <GraduationCap className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6 animate-slide-in-up">
            Welcome to <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Innolearn</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-slide-in-up [animation-delay:200ms]">
            Your personalized learning journey powered by five AI agents
          </p>
          <div className="flex gap-4 justify-center animate-slide-in-up [animation-delay:400ms]">
            <Button asChild size="lg" className="group relative overflow-hidden">
              <Link to="/dashboard" className="relative z-10">
                <span className="absolute inset-0 bg-gradient-to-r from-primary-light to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                <span className="relative">Get Started</span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-transform duration-200">
              <Link to="/agents/profiling">Take Profile Quiz</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Agents Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            Meet Your AI Learning Assistants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, index) => (
              <Card 
                key={agent.name} 
                className="p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-scale-in group cursor-pointer border-2 hover:border-primary/20 relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`w-12 h-12 ${agent.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 relative z-10`}>
                  <agent.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{agent.name}</h3>
                <p className="text-muted-foreground mb-2">{agent.description}</p>
                <p className="text-sm text-primary/70 mb-4 font-medium">{agent.preview}</p>
                <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200 group">
                  <Link to={agent.path} className="flex items-center justify-center gap-2">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Stats Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">Join Thousands of Successful Learners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`p-6 rounded-lg transition-all duration-500 ${
                  currentStat === index ? 'bg-primary text-primary-foreground scale-110 shadow-lg' : 'bg-card hover:bg-muted/50'
                }`}
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-2 ${currentStat === index ? 'text-primary-foreground' : 'text-primary'}`} />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className={`text-sm ${currentStat === index ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="mb-8">
            <div className="text-sm text-muted-foreground mb-2">Platform Growth</div>
            <Progress value={progress} className="h-2 max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">What Our Learners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Learning?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of learners who've accelerated their growth with AI-powered education
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group relative overflow-hidden">
              <Link to="/agents/profiling" className="relative z-10 flex items-center gap-2">
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                <span className="relative">Start Your Journey</span>
                <Zap className="w-4 h-4 group-hover:animate-bounce" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-transform duration-200">
              <Link to="/dashboard" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                View Dashboard
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Free to start
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Instant access
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;