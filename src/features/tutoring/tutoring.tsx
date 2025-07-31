import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Mic, MicOff } from "lucide-react";
import { useState } from "react";

const Tutoring = () => {
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  
  const messages = [
    {
      role: "assistant",
      content: "Hello! I'm your AI tutor. How can I help you with your learning today?",
      timestamp: "10:30 AM"
    },
    {
      role: "user", 
      content: "Can you explain how JavaScript closures work?",
      timestamp: "10:31 AM"
    },
    {
      role: "assistant",
      content: "Great question! A closure in JavaScript is a function that has access to variables in its outer scope even after the outer function has returned. Think of it like a backpack that a function carries with it, containing all the variables it needs from where it was created.",
      timestamp: "10:31 AM"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">AI Tutoring Agent</h1>
        <p className="text-muted-foreground mb-8">
          Get personalized help from your AI tutor with voice and text chat
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <Card className="lg:col-span-2 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">AI Tutor Chat</h2>
                <p className="text-sm text-muted-foreground">Ask questions and get instant help</p>
              </div>
            </div>

            {/* Messages */}
            <div className="space-y-4 mb-6 h-96 overflow-y-auto">
              {messages.map((msg, index) => (
                <div 
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.role === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted'
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                    <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <Input 
                placeholder="Ask your tutor anything..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setIsListening(!isListening)}
                className={isListening ? "bg-primary text-primary-foreground" : ""}
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </Button>
              <Button size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Explain a Concept
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Review My Code
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Practice Problems
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Study Plan Help
              </Button>
            </div>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Voice Features</h4>
              <p className="text-sm text-muted-foreground">
                Click the microphone to ask questions using your voice for a more natural learning experience.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tutoring;