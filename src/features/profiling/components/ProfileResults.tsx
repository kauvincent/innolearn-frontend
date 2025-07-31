import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, User, Brain, Target } from "lucide-react";
import { useProfilingContext } from "@/contexts/ProfilingContext";
import { Link } from "react-router-dom";

const ProfileResults = () => {
  const { profileData } = useProfilingContext();

  const getLearningStyleInfo = (style: string) => {
    const styles = {
      visual: {
        title: "Visual Learner",
        description: "You learn best through visual aids, diagrams, and seeing information presented graphically.",
        tips: ["Use mind maps and flowcharts", "Watch educational videos", "Create visual notes with colors"],
      },
      auditory: {
        title: "Auditory Learner", 
        description: "You learn best through listening, discussions, and verbal explanations.",
        tips: ["Listen to podcasts and lectures", "Discuss topics with others", "Read aloud to yourself"],
      },
      kinesthetic: {
        title: "Kinesthetic Learner",
        description: "You learn best through hands-on activities and physical practice.", 
        tips: ["Practice coding exercises", "Build projects while learning", "Take frequent breaks to move"],
      },
      reading: {
        title: "Reading/Writing Learner",
        description: "You learn best through reading texts and writing notes.",
        tips: ["Take detailed written notes", "Read comprehensive guides", "Summarize concepts in writing"],
      },
    };
    
    return styles[style as keyof typeof styles] || styles.visual;
  };

  const styleInfo = getLearningStyleInfo(profileData.learningStyle);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Profile Complete!</h1>
          <p className="text-muted-foreground">
            Your personalized learning profile has been created
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Learning Style */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="text-xl font-semibold">Learning Style</h2>
            </div>
            
            <Badge variant="secondary" className="mb-3">
              {styleInfo.title}
            </Badge>
            
            <p className="text-muted-foreground mb-4">
              {styleInfo.description}
            </p>
            
            <div>
              <p className="font-medium mb-2">Recommended strategies:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {styleInfo.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Strengths */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-accent-foreground" />
              </div>
              <h2 className="text-xl font-semibold">Your Strengths</h2>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {profileData.strengths.map((strength) => (
                <Badge key={strength} variant="secondary">
                  {strength}
                </Badge>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground">
              We'll leverage these strengths to accelerate your learning in challenging areas.
            </p>
          </Card>
        </div>

        {/* Areas for Growth */}
        <Card className="p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-semibold">Areas for Growth</h2>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {profileData.weaknesses.map((weakness) => (
              <Badge key={weakness} variant="outline">
                {weakness}
              </Badge>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground">
            Our AI agents will provide extra support and practice in these areas to help you improve.
          </p>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/agents/recommendation">Get Personalized Recommendations</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileResults;