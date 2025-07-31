import { Button } from "@/components/ui/button";
import { GraduationCap, Home, LayoutDashboard, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/profile", label: "Profile", icon: User },
  ];

  const agentItems = [
    { path: "/agents/profiling", label: "Profiling" },
    { path: "/agents/recommendation", label: "Recommendations" },
    { path: "/agents/assessment", label: "Assessment" },
    { path: "/agents/tutoring", label: "Tutoring" },
    { path: "/agents/engagement", label: "Engagement" },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">Innolearn</span>
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center justify-between flex-1 ml-8">
            {/* Left side - Home + AI Agents */}
            <div className="flex items-center gap-8">
              {/* Home button */}
              <Button
                variant={location.pathname === "/" ? "default" : "ghost"}
                size="sm"
                asChild
              >
                <Link to="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Home
                </Link>
              </Button>

              {/* AI Agents */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground"></span>
                {agentItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Button
                      key={item.path}
                      variant={isActive ? "default" : "outline"}
                      size="sm"
                      asChild
                    >
                      <Link to={item.path}>{item.label}</Link>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Right side - Profile, Theme Toggle */}
            <div className="flex items-center gap-4">
              <Button
                variant={location.pathname === "/profile" ? "default" : "ghost"}
                size="sm"
                asChild
              >
                <Link to="/profile" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Profile
                </Link>
              </Button>
              
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;