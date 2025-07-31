import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Edit, Trophy, Target, Clock, BookOpen, Star, Zap, TrendingUp, Calendar, Award, Brain, Users, CheckCircle, FlameIcon as Fire, Book, PlayCircle, ChevronRight, Plus, MessageSquare, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Profile = () => {
  const [currentStreak, setCurrentStreak] = useState(12);
  const [totalPoints, setTotalPoints] = useState(2847);
  const [todayStudyTime, setTodayStudyTime] = useState(2.3);

  const quickStats = [
    { label: "Modules Completed", value: 12, icon: Book, color: "bg-primary", textColor: "text-primary-foreground", trend: "+3 this week" },
    { label: "Study Time", value: "47h", icon: Clock, color: "bg-accent", textColor: "text-accent-foreground", trend: `${todayStudyTime}h today` },
    { label: "Achievements", value: 8, icon: Trophy, color: "bg-yellow-500", textColor: "text-white", trend: "2 new" },
    { label: "Average Score", value: "85%", icon: Target, color: "bg-green-500", textColor: "text-white", trend: "+5% this month" },
  ];

  const learningStats = [
    { label: "Courses Completed", value: 8, icon: BookOpen, color: "text-primary" },
    { label: "Total Study Hours", value: 124, icon: Clock, color: "text-accent" },
    { label: "Current Streak", value: currentStreak, icon: Fire, color: "text-orange-500" },
    { label: "Points Earned", value: totalPoints, icon: Star, color: "text-yellow-500" },
  ];

  const currentCourses = [
    { 
      title: "JavaScript Fundamentals", 
      progress: 75, 
      lessonsLeft: 1, 
      totalLessons: 4, 
      difficulty: "Beginner",
      estimatedTime: "2h left"
    },
    { 
      title: "React Basics", 
      progress: 40, 
      lessonsLeft: 6, 
      totalLessons: 10, 
      difficulty: "Intermediate",
      estimatedTime: "8h left"
    },
    { 
      title: "TypeScript Essentials", 
      progress: 15, 
      lessonsLeft: 8, 
      totalLessons: 9, 
      difficulty: "Advanced",
      estimatedTime: "12h left"
    },
  ];

  const aiAgents = [
    { 
      name: "Learning Profile", 
      description: "Update your preferences", 
      icon: Brain, 
      path: "/agents/profiling", 
      color: "bg-primary/10 text-primary border-primary/20",
      status: "Ready"
    },
    { 
      name: "AI Tutor", 
      description: "Get personalized help", 
      icon: MessageSquare, 
      path: "/agents/tutoring", 
      color: "bg-accent/10 text-accent border-accent/20",
      status: "Available 24/7"
    },
    { 
      name: "Assessment", 
      description: "Test your knowledge", 
      icon: Target, 
      path: "/agents/assessment", 
      color: "bg-green-100 text-green-700 border-green-200",
      status: "New quiz available"
    },
    { 
      name: "Recommendations", 
      description: "Discover new content", 
      icon: TrendingUp, 
      path: "/agents/recommendation", 
      color: "bg-purple-100 text-purple-700 border-purple-200",
      status: "3 new suggestions"
    },
  ];

  const upcomingEvents = [
    { title: "JavaScript Workshop", date: "Tomorrow, 2:00 PM", type: "Live Session", participants: 24 },
    { title: "React Study Group", date: "Friday, 6:00 PM", type: "Study Group", participants: 12 },
    { title: "Monthly Assessment", date: "Next week", type: "Assessment", participants: 156 },
  ];

  const achievements = [
    { 
      title: "Speed Learner", 
      description: "Complete 5 modules in one day", 
      icon: Zap, 
      earned: true, 
      date: "3 days ago",
      rarity: "Rare"
    },
    { 
      title: "Consistency King", 
      description: "Maintain 30-day streak", 
      icon: Fire, 
      earned: false, 
      progress: 12,
      target: 30,
      rarity: "Epic"
    },
    { 
      title: "Perfect Score", 
      description: "Get 100% on assessment", 
      icon: Target, 
      earned: true, 
      date: "1 week ago",
      rarity: "Common"
    },
    { 
      title: "Knowledge Master", 
      description: "Complete 10 different courses", 
      icon: Brain, 
      earned: false, 
      progress: 8,
      target: 10,
      rarity: "Legendary"
    },
  ];

  const recentActivity = [
    { 
      title: "Completed JavaScript Fundamentals", 
      type: "course", 
      date: "2 hours ago", 
      points: 150,
      icon: BookOpen 
    },
    { 
      title: "Achieved 95% on React Quiz", 
      type: "assessment", 
      date: "1 day ago", 
      points: 95,
      icon: Target 
    },
    { 
      title: "Unlocked Speed Learner Badge", 
      type: "achievement", 
      date: "3 days ago", 
      points: 200,
      icon: Trophy 
    },
    { 
      title: "Started TypeScript Course", 
      type: "course", 
      date: "1 week ago", 
      points: 0,
      icon: BookOpen 
    },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 animate-fade-in">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Welcome back, John! 👋
            </h1>
            <p className="text-muted-foreground">Ready to continue your learning journey?</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
              <Fire className="w-4 h-4 text-orange-500" />
              <span className="font-semibold">{currentStreak}</span>
              <span className="text-sm text-muted-foreground">day streak</span>
            </div>
            <Button variant="outline" size="sm" className="hover:scale-105 transition-transform duration-200">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
                </div>
                <Badge variant="outline" className="text-xs">{stat.trend}</Badge>
              </div>
              <div>
                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Profile Header Card */}
        <Card className="p-8 mb-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 animate-scale-in">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <Avatar className="w-32 h-32 border-4 border-primary/20">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-accent text-primary-foreground">JD</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center border-4 border-background">
                <Trophy className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">John Doe</h2>
              <p className="text-muted-foreground mb-4">john.doe@example.com</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  <Brain className="w-3 h-3 mr-1" />
                  Visual Learner
                </Badge>
                <Badge variant="outline">Level 8</Badge>
                <Badge variant="outline" className="bg-accent/20 text-accent border-accent/30">
                  <Fire className="w-3 h-3 mr-1" />
                  {currentStreak} Day Streak
                </Badge>
              </div>
              <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{totalPoints}</div>
                <div className="text-sm text-muted-foreground">Total Points</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">87%</div>
                <div className="text-sm text-muted-foreground">Avg Score</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {learningStats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Achievements
            </TabsTrigger>
            <TabsTrigger value="activity" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Activity
            </TabsTrigger>
            <TabsTrigger value="learning" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Learning
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-8">
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Continue Learning - Takes 2 columns */}
              <div className="lg:col-span-2">
                <Card className="p-6 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                      <PlayCircle className="w-6 h-6 text-primary" />
                      Continue Learning
                    </h2>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/agents/recommendation" className="flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Browse All
                      </Link>
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {currentCourses.map((course, index) => (
                      <div 
                        key={course.title}
                        className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                              <BookOpen className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <div>
                              <h3 className="font-semibold group-hover:text-primary transition-colors">{course.title}</h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Badge variant="outline" className="text-xs">
                                  {course.difficulty}
                                </Badge>
                                <span>•</span>
                                <span>{course.estimatedTime}</span>
                              </div>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{course.totalLessons - course.lessonsLeft} of {course.totalLessons} lessons completed</span>
                            <span className="font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Recent Achievements */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Recent Achievements
                </h2>
                <div className="space-y-4">
                  {achievements.slice(0, 3).map((achievement, index) => (
                    <div 
                      key={achievement.title}
                      className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        achievement.rarity === 'Rare' ? 'bg-blue-500' :
                        achievement.rarity === 'Epic' ? 'bg-green-500' :
                        'bg-gray-500'
                      }`}>
                        <achievement.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{achievement.title}</p>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        {achievement.earned && (
                          <p className="text-xs text-muted-foreground">Earned {achievement.date}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" onClick={() => {
                  const achievementsTab = document.querySelector('[value="achievements"]') as HTMLElement;
                  achievementsTab?.click();
                }}>
                  View All Achievements
                </Button>
              </Card>
            </div>

            {/* AI Agents & Events */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* AI Agents */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  AI Learning Assistants
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {aiAgents.map((agent, index) => (
                    <Button
                      key={agent.name}
                      variant="outline"
                      className={`h-auto p-4 justify-start hover:scale-105 transition-transform duration-200 ${agent.color}`}
                      asChild
                    >
                      <Link to={agent.path} className="block">
                        <div className="flex items-start gap-3">
                          <agent.icon className="w-5 h-5 mt-1" />
                          <div className="text-left">
                            <p className="font-medium">{agent.name}</p>
                            <p className="text-xs opacity-80">{agent.description}</p>
                            <p className="text-xs mt-1 font-medium">{agent.status}</p>
                          </div>
                        </div>
                      </Link>
                    </Button>
                  ))}
                </div>
              </Card>

              {/* Upcoming Events */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Upcoming Events
                </h2>
                <div className="space-y-3">
                  {upcomingEvents.map((event, index) => (
                    <div 
                      key={event.title}
                      className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer group"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="flex-1">
                        <p className="font-medium group-hover:text-primary transition-colors">{event.title}</p>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <Badge variant="outline" className="text-xs">{event.type}</Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {event.participants} participants
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Calendar
                </Button>
              </Card>
            </div>

            {/* Quick Actions Footer */}
            <div className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg animate-fade-in">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Ready for your next challenge?</h3>
                  <p className="text-muted-foreground">Continue building your skills with personalized recommendations</p>
                </div>
                <div className="flex gap-3">
                  <Button asChild className="group">
                    <Link to="/agents/recommendation" className="flex items-center gap-2">
                      <Zap className="w-4 h-4 group-hover:animate-bounce" />
                      Get Recommendations
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/agents/assessment" className="flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Take Quiz
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Learning Progress */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Learning Progress
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>JavaScript</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>React</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>TypeScript</span>
                      <span>34%</span>
                    </div>
                    <Progress value={34} className="h-2" />
                  </div>
                </div>
              </Card>

              {/* Current Goals */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent" />
                  Current Goals
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <div className="flex-1">
                      <p className="font-medium">Complete TypeScript Course</p>
                      <p className="text-sm text-muted-foreground">Due in 5 days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <Clock className="w-5 h-5 text-accent" />
                    <div className="flex-1">
                      <p className="font-medium">Study 2 hours daily</p>
                      <p className="text-sm text-muted-foreground">1.5h completed today</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <Fire className="w-5 h-5 text-orange-500" />
                    <div className="flex-1">
                      <p className="font-medium">Maintain 30-day streak</p>
                      <p className="text-sm text-muted-foreground">{currentStreak}/30 days</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={achievement.title}
                  className={`p-6 transition-all duration-300 hover:scale-105 ${
                    achievement.earned ? 'bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20' : 'opacity-75'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${
                      achievement.earned ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            achievement.rarity === 'Legendary' ? 'border-purple-500 text-purple-500' :
                            achievement.rarity === 'Epic' ? 'border-orange-500 text-orange-500' :
                            achievement.rarity === 'Rare' ? 'border-blue-500 text-blue-500' :
                            'border-gray-500 text-gray-500'
                          }`}
                        >
                          {achievement.rarity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                      {achievement.earned ? (
                        <p className="text-xs text-primary font-medium">Earned {achievement.date}</p>
                      ) : (
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Progress</span>
                            <span>{achievement.progress}/{achievement.target}</span>
                          </div>
                          <Progress value={(achievement.progress! / achievement.target!) * 100} className="h-1" />
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className={`p-2 rounded-lg ${
                      activity.type === 'course' ? 'bg-primary/20 text-primary' :
                      activity.type === 'assessment' ? 'bg-accent/20 text-accent' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      <activity.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.date}</p>
                    </div>
                    {activity.points > 0 && (
                      <div className="text-right">
                        <p className="text-sm font-medium text-primary">+{activity.points} pts</p>
                        <Star className="w-4 h-4 text-yellow-500 inline" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="learning" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Learning Style */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  Learning Profile
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Primary Style</p>
                    <Badge variant="secondary" className="bg-primary/20 text-primary">Visual Learner</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Learning Pace</p>
                    <Badge variant="outline">Moderate</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Preferred Time</p>
                    <Badge variant="outline">Morning (9-11 AM)</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Session Duration</p>
                    <Badge variant="outline">45-60 minutes</Badge>
                  </div>
                </div>
              </Card>

              {/* Strengths & Weaknesses */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  Performance Insights
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Strengths</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-700">Problem Solving</Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">Quick Learning</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Areas to Improve</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-orange-300 text-orange-600">Time Management</Badge>
                      <Badge variant="outline" className="border-orange-300 text-orange-600">Advanced Concepts</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;