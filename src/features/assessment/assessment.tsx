import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, Target, Trophy, Zap, Brain, Star } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
}

const Assessment = () => {
  const [currentProgress, setCurrentProgress] = useState(60);
  const [timeRemaining, setTimeRemaining] = useState(15 * 60); // 15 minutes in seconds
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const mockQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "What is the correct way to declare a React functional component?",
      options: [
        "function Component() { return <div>Hello</div>; }",
        "const Component = () => { return <div>Hello</div>; }",
        "class Component extends React.Component { render() { return <div>Hello</div>; } }",
        "Both A and B are correct"
      ],
      correct: 3
    },
    {
      id: 2,
      question: "Which hook is used for managing state in React?",
      options: ["useEffect", "useState", "useContext", "useReducer"],
      correct: 1
    }
  ];

  useEffect(() => {
    if (isQuizActive && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isQuizActive, timeRemaining]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === mockQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setCurrentProgress(((currentQuestion + 2) / 10) * 100);
    } else {
      setIsQuizActive(false);
      // Quiz completed
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Assessment & Feedback Agent
          </h1>
          <p className="text-muted-foreground mb-8">
            Track your progress with smart assessments and real-time feedback
          </p>
        </div>

        {!isQuizActive ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-slide-in-up">
            {/* Current Assessment */}
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Current Assessment</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">JavaScript Fundamentals Quiz</p>
                  <div className="relative mt-2">
                    <Progress value={currentProgress} className="h-3" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full animate-pulse" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">6 of 10 questions completed</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-primary animate-pulse" />
                    {formatTime(timeRemaining)} remaining
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="w-4 h-4 text-accent" />
                    85% target score
                  </div>
                </div>
                <Button 
                  className="w-full group hover:scale-105 transition-transform duration-200" 
                  onClick={() => setIsQuizActive(true)}
                >
                  <Zap className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Continue Assessment
                </Button>
              </div>
            </Card>

            {/* Recent Results */}
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Recent Results</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer group">
                  <CheckCircle className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <div className="flex-1">
                    <p className="font-medium">HTML Basics Quiz</p>
                    <p className="text-sm text-muted-foreground">Score: 92% • 2 days ago</p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < 4 ? 'text-primary fill-primary' : 'text-muted-foreground'}`} />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer group">
                  <CheckCircle className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <div className="flex-1">
                    <p className="font-medium">CSS Flexbox Assessment</p>
                    <p className="text-sm text-muted-foreground">Score: 88% • 5 days ago</p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < 4 ? 'text-primary fill-primary' : 'text-muted-foreground'}`} />
                    ))}
                  </div>
                </div>
                <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  View All Results
                </Button>
              </div>
            </Card>
          </div>
        ) : (
          /* Active Quiz Interface */
          <Card className="p-8 animate-scale-in">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Question {currentQuestion + 1} of {mockQuestions.length}</h3>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-mono">{formatTime(timeRemaining)}</span>
                </div>
              </div>
              <Progress value={((currentQuestion + 1) / mockQuestions.length) * 100} className="h-2" />
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-medium mb-6">{mockQuestions[currentQuestion]?.question}</h2>
              <div className="space-y-3">
                {mockQuestions[currentQuestion]?.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 text-left border rounded-lg transition-all duration-200 hover:scale-[1.02] ${
                      selectedAnswer === index
                        ? 'border-primary bg-primary/10 shadow-md'
                        : 'border-border hover:border-primary/50 hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswer === index ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setIsQuizActive(false)}>
                Exit Quiz
              </Button>
              <Button 
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className="hover:scale-105 transition-transform duration-200"
              >
                {currentQuestion < mockQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </Button>
            </div>
          </Card>
        )}

        {/* Available Assessments */}
        {!isQuizActive && (
          <Card className="p-6 mt-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-xl font-semibold mb-4">Available Assessments</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "React Components", questions: 15, duration: 20, difficulty: "Intermediate" },
                { title: "CSS Grid Layout", questions: 12, duration: 15, difficulty: "Beginner" },
                { title: "JavaScript Arrays", questions: 10, duration: 12, difficulty: "Advanced" }
              ].map((assessment, index) => (
                <div 
                  key={assessment.title}
                  className="p-4 border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group hover:border-primary/50"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <h3 className="font-medium group-hover:text-primary transition-colors">{assessment.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {assessment.questions} questions • {assessment.duration} min
                  </p>
                  <div className="mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      assessment.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      assessment.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {assessment.difficulty}
                    </span>
                  </div>
                  <Button size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Start Assessment
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Assessment;