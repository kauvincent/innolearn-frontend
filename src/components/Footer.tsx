import { Link } from "react-router-dom";
import { Heart, BookOpen, Users, Mail, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">InnoLearn</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Personalized AI-powered learning platform that adapts to your unique learning style and goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/agents/profiling" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Learning Profile
                </Link>
              </li>
              <li>
                <Link to="/agents/recommendation" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Recommendations
                </Link>
              </li>
              <li>
                <Link to="/agents/tutoring" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  AI Tutoring
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/agents/assessment" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Assessments
                </Link>
              </li>
              <li>
                <Link to="/agents/engagement" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Engagement
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Progress Tracking
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Achievements
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>by the InnoLearn Team</span>
          </div>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>© 2024 Rein4ce learning Limited Uganda. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;