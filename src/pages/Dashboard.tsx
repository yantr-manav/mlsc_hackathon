
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  BarChart, 
  BookOpen, 
  Calendar, 
  CheckCircle, 
  Code, 
  MessageSquare, 
  Timer, 
  TrendingUp 
} from 'lucide-react';

const Dashboard = () => {
  // Mock data
  const studyProgress = 65;
  const codingProgress = 48;
  const interviewProgress = 30;
  
  const upcomingDeadlines = [
    { id: 1, company: "Google", position: "SDE Intern", date: "Nov 15, 2023", status: "Application Due" },
    { id: 2, company: "Microsoft", position: "Junior Developer", date: "Nov 18, 2023", status: "Online Test" },
    { id: 3, company: "Amazon", position: "SDE I", date: "Nov 22, 2023", status: "Interview" }
  ];
  
  const recentActivities = [
    { id: 1, activity: "Completed 3 Hard coding challenges", time: "2 hours ago" },
    { id: 2, activity: "Updated resume with new project", time: "Yesterday" },
    { id: 3, activity: "Completed System Design module", time: "2 days ago" },
    { id: 4, activity: "Submitted application to Facebook", time: "3 days ago" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Welcome back, Student</h1>
            <p className="text-muted-foreground">Track your progress and upcoming tasks.</p>
          </div>
          
          {/* Progress Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Study Plan Progress</CardTitle>
                  <BookOpen className="h-5 w-5 text-blue-500" />
                </div>
                <CardDescription>Overall completion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Progress</span>
                    <span className="text-sm font-medium">{studyProgress}%</span>
                  </div>
                  <Progress value={studyProgress} className="h-2" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Coding Challenges</CardTitle>
                  <Code className="h-5 w-5 text-indigo-500" />
                </div>
                <CardDescription>Problems solved</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Progress</span>
                    <span className="text-sm font-medium">{codingProgress}%</span>
                  </div>
                  <Progress value={codingProgress} className="h-2" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Interview Preparation</CardTitle>
                  <MessageSquare className="h-5 w-5 text-violet-500" />
                </div>
                <CardDescription>Mock interviews completed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Progress</span>
                    <span className="text-sm font-medium">{interviewProgress}%</span>
                  </div>
                  <Progress value={interviewProgress} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Upcoming Deadlines</CardTitle>
                    <Calendar className="h-5 w-5 text-pink-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingDeadlines.map((deadline) => (
                      <div key={deadline.id} className="flex items-center justify-between p-3 rounded-lg border hover:border-primary/50 transition-colors">
                        <div>
                          <h4 className="font-medium">{deadline.company}</h4>
                          <p className="text-sm text-muted-foreground">{deadline.position}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{deadline.status}</div>
                          <div className="text-sm text-muted-foreground">{deadline.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Weekly Study Plan</CardTitle>
                    <BookOpen className="h-5 w-5 text-blue-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg border hover:border-primary/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Data Structures</h4>
                        <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full">4 hours remaining</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Focus on trees, graphs, and dynamic programming</p>
                      <Progress value={60} className="h-1.5" />
                    </div>
                    
                    <div className="p-3 rounded-lg border hover:border-primary/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">System Design</h4>
                        <span className="text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded-full">2 hours remaining</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Learn about distributed systems and databases</p>
                      <Progress value={30} className="h-1.5" />
                    </div>
                    
                    <div className="p-3 rounded-lg border hover:border-primary/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Behavioral Questions</h4>
                        <span className="text-sm bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 px-2 py-1 rounded-full">1 hour remaining</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Prepare for common interview questions</p>
                      <Progress value={80} className="h-1.5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Recent Activity</CardTitle>
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex gap-3">
                        <div className="mt-0.5">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{activity.activity}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Upcoming Interview</CardTitle>
                    <MessageSquare className="h-5 w-5 text-violet-500" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg glass-card">
                    <div className="flex items-center gap-3 mb-2">
                      <Timer className="h-5 w-5 text-orange-500" />
                      <h4 className="font-medium">Mock Technical Interview</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Tomorrow, 3:00 PM</p>
                    <button className="w-full bg-primary/10 hover:bg-primary/20 text-primary py-2 rounded-md text-sm font-medium transition-colors">
                      Prepare Now
                    </button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Recommended Practice</CardTitle>
                    <Code className="h-5 w-5 text-indigo-500" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 rounded-lg border hover:border-primary/50 transition-colors">
                    <h4 className="font-medium">Binary Tree Traversal</h4>
                    <p className="text-xs text-muted-foreground">Medium Difficulty</p>
                  </div>
                  <div className="p-3 rounded-lg border hover:border-primary/50 transition-colors">
                    <h4 className="font-medium">Dynamic Programming</h4>
                    <p className="text-xs text-muted-foreground">Hard Difficulty</p>
                  </div>
                  <div className="p-3 rounded-lg border hover:border-primary/50 transition-colors">
                    <h4 className="font-medium">Graph Algorithms</h4>
                    <p className="text-xs text-muted-foreground">Medium Difficulty</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
