
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, BookOpen, FileText, ArrowRight, Calendar, Clock, Badge } from 'lucide-react';

const StudyPlan = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Personalized Study Plan</h1>
            <p className="text-muted-foreground">Stay on track with your SDE placement preparation.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Sidebar with Topics */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Topics</CardTitle>
                  <CardDescription>Track your progress across key topics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Data Structures</span>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Algorithms</span>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">System Design</span>
                      <span className="text-sm font-medium">42%</span>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Object-Oriented Design</span>
                      <span className="text-sm font-medium">50%</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Database Systems</span>
                      <span className="text-sm font-medium">35%</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Operating Systems</span>
                      <span className="text-sm font-medium">28%</span>
                    </div>
                    <Progress value={28} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Behavioral Interview</span>
                      <span className="text-sm font-medium">60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="daily" className="w-full">
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="daily">Daily Plan</TabsTrigger>
                  <TabsTrigger value="weekly">Weekly Overview</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly Goals</TabsTrigger>
                </TabsList>
                
                <TabsContent value="daily" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Today's Study Plan</CardTitle>
                          <CardDescription>Tuesday, November 14th</CardDescription>
                        </div>
                        <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          4 hours planned
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="p-4 rounded-lg border border-border hover:border-primary/20 transition-all hover:shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                            <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-medium text-lg">Binary Trees & Binary Search Trees</h3>
                              <Badge className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30">
                                In Progress
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-3">
                              Learn about tree traversals, balanced trees, and common operations.
                            </p>
                            <div className="flex items-center text-sm text-muted-foreground mb-4">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>Estimated time: 1.5 hours</span>
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span className="text-sm">Introduction to Binary Trees</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span className="text-sm">Tree Traversal Methods</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="h-4 w-4 rounded-full border border-muted-foreground"></div>
                                <span className="text-sm">Binary Search Tree Operations</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="h-4 w-4 rounded-full border border-muted-foreground"></div>
                                <span className="text-sm">Balanced Trees (AVL, Red-Black)</span>
                              </div>
                            </div>
                            <div className="mt-4">
                              <Button variant="outline" size="sm">
                                Continue Learning
                                <ArrowRight className="h-4 w-4 ml-2" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-lg border border-border hover:border-primary/20 transition-all hover:shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg">
                            <FileText className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-medium text-lg">Dynamic Programming Practice</h3>
                              <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/30">
                                Upcoming
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-3">
                              Practice 5 medium-level dynamic programming problems.
                            </p>
                            <div className="flex items-center text-sm text-muted-foreground mb-4">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>Estimated time: 2 hours</span>
                            </div>
                            <div className="mt-4">
                              <Button variant="outline" size="sm">
                                Start Practice Session
                                <ArrowRight className="h-4 w-4 ml-2" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-lg border border-border hover:border-primary/20 transition-all hover:shadow-sm opacity-75">
                        <div className="flex items-start gap-4">
                          <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-lg">
                            <Calendar className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-medium text-lg">Mock Interview: System Design</h3>
                              <Badge className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                                Scheduled
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-3">
                              30-minute system design interview with a mentor.
                            </p>
                            <div className="flex items-center text-sm text-muted-foreground mb-4">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>Scheduled: 6:00 PM - 6:30 PM</span>
                            </div>
                            <div className="mt-4">
                              <Button variant="outline" size="sm">
                                Prepare for Interview
                                <ArrowRight className="h-4 w-4 ml-2" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="weekly" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Weekly Plan</CardTitle>
                          <CardDescription>November 13 - November 19</CardDescription>
                        </div>
                        <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          22 hours planned
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
                          <div key={day} className="border-b border-border pb-4 last:border-0 last:pb-0">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="font-medium">{day}</h3>
                              <span className="text-sm text-muted-foreground">
                                {index === 1 ? 'Today' : `${index === 0 ? 'Yesterday' : ''}`}
                              </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {index < 2 && (
                                <div className="p-3 rounded-md bg-secondary/50 flex items-center gap-2">
                                  <div className={index < 1 ? "text-green-500" : ""}>
                                    {index < 1 ? <Check className="h-4 w-4" /> : <div className="h-4 w-4 rounded-full border border-muted-foreground"></div>}
                                  </div>
                                  <span className="text-sm">Data Structures: {index === 0 ? 'Heaps & Priority Queues' : 'Binary Trees'}</span>
                                </div>
                              )}
                              {index < 2 && (
                                <div className="p-3 rounded-md bg-secondary/50 flex items-center gap-2">
                                  <div className={index < 1 ? "text-green-500" : ""}>
                                    {index < 1 ? <Check className="h-4 w-4" /> : <div className="h-4 w-4 rounded-full border border-muted-foreground"></div>}
                                  </div>
                                  <span className="text-sm">Algorithms: {index === 0 ? 'Sorting Algorithms' : 'Dynamic Programming'}</span>
                                </div>
                              )}
                              {index === 1 && (
                                <div className="p-3 rounded-md bg-secondary/50 flex items-center gap-2">
                                  <div className="h-4 w-4 rounded-full border border-muted-foreground"></div>
                                  <span className="text-sm">Mock Interview: System Design</span>
                                </div>
                              )}
                              {index > 1 && (
                                <div className="p-3 rounded-md bg-secondary/50 flex items-center gap-2">
                                  <div className="h-4 w-4 rounded-full border border-muted-foreground"></div>
                                  <span className="text-sm">
                                    {index === 2 ? 'Graphs & Graph Algorithms' : 
                                     index === 3 ? 'Object-Oriented Design' :
                                     index === 4 ? 'Database Systems' :
                                     index === 5 ? 'System Design Practice' :
                                     'Review & Practice Tests'}
                                  </span>
                                </div>
                              )}
                              {index > 1 && (
                                <div className="p-3 rounded-md bg-secondary/50 flex items-center gap-2">
                                  <div className="h-4 w-4 rounded-full border border-muted-foreground"></div>
                                  <span className="text-sm">
                                    {index === 2 ? 'Behavioral Interview Prep' : 
                                     index === 3 ? 'Advanced Algorithms' :
                                     index === 4 ? 'Coding Challenges (Medium)' :
                                     index === 5 ? 'Coding Challenges (Hard)' :
                                     'Mock Interviews'}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="monthly" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Monthly Goals</CardTitle>
                          <CardDescription>November 2023</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="p-4 rounded-lg border">
                          <h3 className="font-medium text-lg mb-3">Technical Skills</h3>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm">Complete Data Structures & Algorithms</span>
                                <span className="text-sm font-medium">65%</span>
                              </div>
                              <Progress value={65} className="h-2" />
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm">Solve 150 coding problems</span>
                                <span className="text-sm font-medium">42%</span>
                              </div>
                              <Progress value={42} className="h-2" />
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm">Complete System Design fundamentals</span>
                                <span className="text-sm font-medium">25%</span>
                              </div>
                              <Progress value={25} className="h-2" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 rounded-lg border">
                          <h3 className="font-medium text-lg mb-3">Interview Preparation</h3>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm">Complete 8 mock technical interviews</span>
                                <span className="text-sm font-medium">38%</span>
                              </div>
                              <Progress value={38} className="h-2" />
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm">Prepare all behavioral questions</span>
                                <span className="text-sm font-medium">60%</span>
                              </div>
                              <Progress value={60} className="h-2" />
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm">Practice 5 system design interviews</span>
                                <span className="text-sm font-medium">20%</span>
                              </div>
                              <Progress value={20} className="h-2" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 rounded-lg border">
                          <h3 className="font-medium text-lg mb-3">Applications</h3>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm">Apply to 15 SDE positions</span>
                                <span className="text-sm font-medium">53%</span>
                              </div>
                              <Progress value={53} className="h-2" />
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm">Complete company research</span>
                                <span className="text-sm font-medium">47%</span>
                              </div>
                              <Progress value={47} className="h-2" />
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm">Customize resume for each application</span>
                                <span className="text-sm font-medium">40%</span>
                              </div>
                              <Progress value={40} className="h-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StudyPlan;
