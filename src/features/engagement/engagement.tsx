import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Flame, Trophy, Target, Gift, Calendar } from "lucide-react";

const Engagement = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Engagement & Motivation Agent</h1>
        <p className="text-muted-foreground mb-8">
          Stay motivated with streaks, achievements, and personalized goals
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Streak */}
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Flame className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">12</h2>
                <p className="text-muted-foreground">Day Streak</p>
              </div>
            </div>
            <Progress value={75} className="mb-3" />
            <p className="text-sm text-muted-foreground">3 more days to reach your monthly goal!</p>
            <Button className="w-full mt-4">Continue Streak</Button>
          </Card>

          {/* Weekly Goal */}
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Weekly Goal</h2>
                <p className="text-muted-foreground">5 hours study time</p>
              </div>
            </div>
            <Progress value={80} className="mb-3" />
            <p className="text-sm text-muted-foreground">4h completed • 1h remaining</p>
            <div className="flex gap-2 mt-4">
              <Button size="sm" className="flex-1">Study Now</Button>
              <Button size="sm" variant="outline" className="flex-1">Adjust Goal</Button>
            </div>
          </Card>

          {/* Next Reward */}
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Next Reward</h2>
                <p className="text-muted-foreground">JavaScript Badge</p>
              </div>
            </div>
            <Progress value={90} className="mb-3" />
            <p className="text-sm text-muted-foreground">Complete 1 more module to unlock</p>
            <Button variant="outline" className="w-full mt-4">View Rewards</Button>
          </Card>
        </div>

        {/* Achievements Grid */}
        <Card className="p-6 mt-8">
          <h2 className="text-xl font-semibold mb-6">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-muted rounded-lg text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-medium mb-1">First Module</h3>
              <Badge variant="secondary">Unlocked</Badge>
            </div>
            
            <div className="p-4 bg-muted rounded-lg text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <Flame className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-medium mb-1">7-Day Streak</h3>
              <Badge variant="secondary">Unlocked</Badge>
            </div>

            <div className="p-4 bg-muted rounded-lg text-center">
              <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-medium mb-1">Daily Learner</h3>
              <Badge variant="secondary">Unlocked</Badge>
            </div>

            <div className="p-4 bg-muted rounded-lg text-center opacity-50">
              <div className="w-16 h-16 bg-muted-foreground/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-medium mb-1">JavaScript Master</h3>
              <Badge variant="outline">Locked</Badge>
            </div>
          </div>
        </Card>

        {/* Motivation Tips */}
        <Card className="p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">Today's Motivation</h2>
          <div className="bg-primary/10 p-4 rounded-lg">
            <p className="text-foreground font-medium mb-2">
              "The expert in anything was once a beginner."
            </p>
            <p className="text-sm text-muted-foreground">
              Keep building your skills one step at a time. You're making great progress!
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Engagement;