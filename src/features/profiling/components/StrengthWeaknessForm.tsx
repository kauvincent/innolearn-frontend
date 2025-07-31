import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useProfilingContext } from "@/contexts/ProfilingContext";

interface StrengthWeaknessFormProps {
  onComplete: () => void;
}

const StrengthWeaknessForm = ({ onComplete }: StrengthWeaknessFormProps) => {
  const { updateProfile } = useProfilingContext();
  const [selectedStrengths, setSelectedStrengths] = useState<string[]>([]);
  const [selectedWeaknesses, setSelectedWeaknesses] = useState<string[]>([]);

  const strengthOptions = [
    "Problem Solving",
    "Logical Thinking", 
    "Creativity",
    "Communication",
    "Attention to Detail",
    "Quick Learning",
    "Persistence",
    "Research Skills",
    "Pattern Recognition",
    "Memory Retention",
  ];

  const weaknessOptions = [
    "Math Concepts",
    "Time Management",
    "Focus/Concentration",
    "Abstract Thinking",
    "Technical Writing",
    "Public Speaking",
    "Complex Algorithms",
    "Reading Comprehension",
    "Note Taking",
    "Test Anxiety",
  ];

  const toggleStrength = (strength: string) => {
    setSelectedStrengths(prev => 
      prev.includes(strength) 
        ? prev.filter(s => s !== strength)
        : [...prev, strength]
    );
  };

  const toggleWeakness = (weakness: string) => {
    setSelectedWeaknesses(prev =>
      prev.includes(weakness)
        ? prev.filter(w => w !== weakness) 
        : [...prev, weakness]
    );
  };

  const handleComplete = () => {
    updateProfile({
      strengths: selectedStrengths,
      weaknesses: selectedWeaknesses,
    });
    onComplete();
  };

  const canComplete = selectedStrengths.length >= 2 && selectedWeaknesses.length >= 1;

  return (
    <div className="space-y-8">
      {/* Strengths Section */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">
          Select Your Strengths (Choose at least 2)
        </h3>
        <p className="text-muted-foreground mb-6">
          What do you consider your strongest learning abilities?
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {strengthOptions.map((strength) => (
            <div key={strength}>
              <Badge
                variant={selectedStrengths.includes(strength) ? "default" : "outline"}
                className="cursor-pointer p-3 justify-center hover:bg-primary/10 transition-colors"
                onClick={() => toggleStrength(strength)}
              >
                {strength}
                {selectedStrengths.includes(strength) && (
                  <X className="w-3 h-3 ml-2" />
                )}
              </Badge>
            </div>
          ))}
        </div>
        
        {selectedStrengths.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-muted-foreground mb-2">Selected strengths:</p>
            <div className="flex flex-wrap gap-2">
              {selectedStrengths.map((strength) => (
                <Badge key={strength} variant="secondary">
                  {strength}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </Card>

      {/* Weaknesses Section */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">
          Areas for Growth (Choose at least 1)
        </h3>
        <p className="text-muted-foreground mb-6">
          What areas would you like to improve or find challenging?
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {weaknessOptions.map((weakness) => (
            <div key={weakness}>
              <Badge
                variant={selectedWeaknesses.includes(weakness) ? "default" : "outline"}
                className="cursor-pointer p-3 justify-center hover:bg-primary/10 transition-colors"
                onClick={() => toggleWeakness(weakness)}
              >
                {weakness}
                {selectedWeaknesses.includes(weakness) && (
                  <X className="w-3 h-3 ml-2" />
                )}
              </Badge>
            </div>
          ))}
        </div>
        
        {selectedWeaknesses.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-muted-foreground mb-2">Areas for growth:</p>
            <div className="flex flex-wrap gap-2">
              {selectedWeaknesses.map((weakness) => (
                <Badge key={weakness} variant="secondary">
                  {weakness}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </Card>

      <div className="flex justify-end">
        <Button 
          onClick={handleComplete}
          disabled={!canComplete}
          className="px-8"
        >
          Continue to Final Step
        </Button>
      </div>
    </div>
  );
};

export default StrengthWeaknessForm;