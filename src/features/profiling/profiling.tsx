import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useProfilingContext } from "@/contexts/ProfilingContext";
import LearningStyleQuiz from "./components/LearningStyleQuiz";
import StrengthWeaknessForm from "./components/StrengthWeaknessForm";
import ProfileResults from "./components/ProfileResults";

const Profiling = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { profileData, isComplete } = useProfilingContext();
  
  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  if (isComplete) {
    return <ProfileResults />;
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Student Profiling Agent</h1>
          <p className="text-muted-foreground mb-6">
            Help us understand your learning preferences to personalize your experience
          </p>
          <div className="flex items-center gap-4">
            <Progress value={progress} className="flex-1" />
            <span className="text-sm text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
        </div>

        <Card className="p-8">
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Learning Style Assessment</h2>
              <LearningStyleQuiz onComplete={() => setCurrentStep(2)} />
            </div>
          )}
          
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Strengths & Areas for Growth</h2>
              <StrengthWeaknessForm onComplete={() => setCurrentStep(3)} />
            </div>
          )}
          
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Learning Preferences</h2>
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-6">
                  Final step: Tell us about your preferred learning schedule and goals
                </p>
                <div className="space-y-4 max-w-md mx-auto">
                  <Button 
                    className="w-full" 
                    onClick={() => setCurrentStep(1)}
                  >
                    Complete Profile Setup
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setCurrentStep(currentStep - 1)}
                  >
                    Back
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Profiling;