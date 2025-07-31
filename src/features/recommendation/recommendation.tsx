import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, BookOpen } from "lucide-react";

const Recommendation = () => {
  const recommendations = [
    {
      title: "JavaScript Fundamentals",
      description: "Master the basics of JavaScript programming",
      duration: "4 hours",
      difficulty: "Beginner",
      rating: 4.8,
      modules: 12,
    },
    {
      title: "React Components",
      description: "Learn to build reusable React components",
      duration: "6 hours", 
      difficulty: "Intermediate",
      rating: 4.9,
      modules: 18,
    },
    {
      title: "CSS Grid Layout",
      description: "Create modern layouts with CSS Grid",
      duration: "3 hours",
      difficulty: "Beginner",
      rating: 4.7,
      modules: 8,
    },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Content Recommendation Agent</h1>
        <p className="text-muted-foreground mb-8">
          Personalized learning modules based on your profile and progress
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <Badge variant={item.difficulty === "Beginner" ? "secondary" : "outline"}>
                  {item.difficulty}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{item.rating}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {item.duration}
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  {item.modules} modules
                </div>
              </div>
              
              <Button className="w-full">Start Learning</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;