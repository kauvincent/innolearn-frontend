import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useProfilingContext } from "@/contexts/ProfilingContext";

interface LearningStyleQuizProps {
  onComplete: () => void;
}

const LearningStyleQuiz = ({ onComplete }: LearningStyleQuizProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const { updateProfile } = useProfilingContext();

  const questions = [
    {
      id: "q1",
      question: "When learning something new, I prefer to:",
      options: [
        { value: "visual", label: "See diagrams, charts, and visual aids" },
        { value: "auditory", label: "Listen to explanations and discussions" },
        { value: "kinesthetic", label: "Try it out hands-on and practice" },
        { value: "reading", label: "Read detailed instructions and notes" },
      ],
    },
    {
      id: "q2", 
      question: "In a classroom setting, I learn best when:",
      options: [
        { value: "visual", label: "The instructor uses slides and visual demonstrations" },
        { value: "auditory", label: "I can ask questions and discuss with others" },
        { value: "kinesthetic", label: "There are interactive activities and exercises" },
        { value: "reading", label: "I have written materials to study from" },
      ],
    },
    {
      id: "q3",
      question: "When solving problems, I tend to:",
      options: [
        { value: "visual", label: "Draw diagrams or create mind maps" },
        { value: "auditory", label: "Talk through the problem out loud" },
        { value: "kinesthetic", label: "Work through examples step by step" },
        { value: "reading", label: "Write down notes and organize information" },
      ],
    },
  ];

  const handleAnswerSelect = (questionId: string, value: string) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateLearningStyle = () => {
    const scores = { visual: 0, auditory: 0, kinesthetic: 0, reading: 0 };
    Object.values(selectedAnswers).forEach(answer => {
      scores[answer as keyof typeof scores]++;
    });
    
    const maxScore = Math.max(...Object.values(scores));
    const dominantStyle = Object.entries(scores).find(([_, score]) => score === maxScore)?.[0] || "visual";
    
    return dominantStyle;
  };

  const handleComplete = () => {
    const learningStyle = calculateLearningStyle();
    updateProfile({ learningStyle });
    onComplete();
  };

  const canComplete = Object.keys(selectedAnswers).length === questions.length;

  return (
    <div className="space-y-6">
      {questions.map((question) => (
        <Card key={question.id} className="p-6">
          <h3 className="font-semibold mb-4">{question.question}</h3>
          <div className="space-y-3">
            {question.options.map((option) => (
              <div
                key={option.value}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedAnswers[question.id] === option.value
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => handleAnswerSelect(question.id, option.value)}
              >
                <label className="cursor-pointer flex items-center gap-3">
                  <input
                    type="radio"
                    name={question.id}
                    value={option.value}
                    checked={selectedAnswers[question.id] === option.value}
                    onChange={() => handleAnswerSelect(question.id, option.value)}
                    className="text-primary"
                  />
                  <span>{option.label}</span>
                </label>
              </div>
            ))}
          </div>
        </Card>
      ))}
      
      <div className="flex justify-end">
        <Button 
          onClick={handleComplete}
          disabled={!canComplete}
          className="px-8"
        >
          Continue to Next Step
        </Button>
      </div>
    </div>
  );
};

export default LearningStyleQuiz;