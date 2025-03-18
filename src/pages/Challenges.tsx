
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Code, 
  Star, 
  CheckCircle2, 
  Clock, 
  Filter, 
  ArrowUpDown, 
  Search,
  ArrowRight
} from 'lucide-react';

type Challenge = {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  completed: boolean;
  timeEstimate: string;
  companies: string[];
};

const challengesData: Challenge[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    tags: ["Arrays", "Hash Table"],
    completed: true,
    timeEstimate: "15-20 min",
    companies: ["Google", "Amazon", "Facebook"]
  },
  {
    id: 2,
    title: "Valid Parentheses",
    difficulty: "Easy",
    tags: ["Stack", "String"],
    completed: true,
    timeEstimate: "15-20 min",
    companies: ["Microsoft", "Amazon"]
  },
  {
    id: 3,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    tags: ["Linked List", "Recursion"],
    completed: false,
    timeEstimate: "20-25 min",
    companies: ["Google", "Apple"]
  },
  {
    id: 4,
    title: "LRU Cache",
    difficulty: "Medium",
    tags: ["Hash Table", "Linked List", "Design"],
    completed: false,
    timeEstimate: "30-40 min",
    companies: ["Facebook", "Amazon", "Microsoft"]
  },
  {
    id: 5,
    title: "Number of Islands",
    difficulty: "Medium",
    tags: ["DFS", "BFS", "Union Find", "Matrix"],
    completed: false,
    timeEstimate: "25-35 min",
    companies: ["Google", "Amazon", "Facebook"]
  },
  {
    id: 6,
    title: "Course Schedule",
    difficulty: "Medium",
    tags: ["DFS", "BFS", "Graph", "Topological Sort"],
    completed: false,
    timeEstimate: "30-40 min",
    companies: ["Amazon", "Microsoft", "Facebook"]
  },
  {
    id: 7,
    title: "Trapping Rain Water",
    difficulty: "Hard",
    tags: ["Array", "Two Pointers", "Dynamic Programming", "Stack"],
    completed: false,
    timeEstimate: "45-60 min",
    companies: ["Google", "Amazon", "Apple"]
  },
  {
    id: 8,
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    tags: ["Linked List", "Divide and Conquer", "Heap"],
    completed: false,
    timeEstimate: "40-50 min",
    companies: ["Amazon", "Microsoft", "Facebook"]
  }
];

const Challenges = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredChallenges, setFilteredChallenges] = useState(challengesData);
  
  // Filter challenges based on search query
  const filterChallenges = (query: string) => {
    if (!query.trim()) {
      setFilteredChallenges(challengesData);
      return;
    }
    
    const lowercaseQuery = query.toLowerCase();
    const filtered = challengesData.filter(challenge => 
      challenge.title.toLowerCase().includes(lowercaseQuery) ||
      challenge.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
      challenge.companies.some(company => company.toLowerCase().includes(lowercaseQuery))
    );
    
    setFilteredChallenges(filtered);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterChallenges(query);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Coding Challenges</h1>
            <p className="text-muted-foreground">Practice with a variety of coding problems to prepare for technical interviews.</p>
          </div>
          
          <div className="mb-8">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <TabsList className="grid grid-cols-3 w-full sm:w-auto">
                  <TabsTrigger value="all">All Challenges</TabsTrigger>
                  <TabsTrigger value="recommended">Recommended</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:flex-none sm:min-w-[300px]">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search challenges..."
                      className="pl-10 py-2 pr-4 w-full h-10 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      value={searchQuery}
                      onChange={handleSearch}
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ArrowUpDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredChallenges.map((challenge) => (
                    <ChallengeCard key={challenge.id} challenge={challenge} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="recommended">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredChallenges
                    .filter(c => !c.completed)
                    .slice(0, 6)
                    .map((challenge) => (
                      <ChallengeCard key={challenge.id} challenge={challenge} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="completed">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredChallenges
                    .filter(c => c.completed)
                    .map((challenge) => (
                      <ChallengeCard key={challenge.id} challenge={challenge} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Daily Challenges</CardTitle>
                <CardDescription>
                  Complete these challenges to build consistency in your preparation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-0">
                    <CardContent className="p-6">
                      <div className="flex flex-col h-full">
                        <div className="mb-2">
                          <Badge variant="outline" className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
                            Today's Challenge
                          </Badge>
                        </div>
                        <h3 className="text-lg font-medium mb-2">Minimum Path Sum</h3>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800">
                            Medium
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            30-40 min
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Find the path with the minimum sum from top to bottom of a grid.
                        </p>
                        <div className="mt-auto">
                          <Button size="sm" className="w-full">
                            Start Challenge
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border">
                    <CardContent className="p-6">
                      <div className="flex flex-col h-full">
                        <div className="mb-2">
                          <Badge variant="outline" className="bg-secondary text-muted-foreground border-border">
                            Tomorrow
                          </Badge>
                        </div>
                        <h3 className="text-lg font-medium mb-2">Binary Tree Level Order Traversal</h3>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800">
                            Easy
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            20-25 min
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Return the level order traversal of a binary tree's values.
                        </p>
                        <div className="mt-auto">
                          <Button variant="outline" size="sm" className="w-full">
                            Preview
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border">
                    <CardContent className="p-6">
                      <div className="flex flex-col h-full">
                        <div className="mb-2">
                          <Badge variant="outline" className="bg-secondary text-muted-foreground border-border">
                            Coming Soon
                          </Badge>
                        </div>
                        <h3 className="text-lg font-medium mb-2">Word Break</h3>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="bg-red-500/10 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800">
                            Hard
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            40-50 min
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Determine if a string can be segmented into dictionary words.
                        </p>
                        <div className="mt-auto">
                          <Button variant="outline" size="sm" className="w-full">
                            Preview
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const ChallengeCard = ({ challenge }: { challenge: Challenge }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800";
      case 'Medium':
        return "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800";
      case 'Hard':
        return "bg-red-500/10 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <Card className={`hover:shadow-md transition-shadow ${challenge.completed ? 'border-green-200 dark:border-green-900/50' : ''}`}>
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium text-lg mb-2 flex items-center">
              {challenge.title}
              {challenge.completed && (
                <CheckCircle2 className="ml-2 h-4 w-4 text-green-500" />
              )}
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant="outline" className={getDifficultyColor(challenge.difficulty)}>
                {challenge.difficulty}
              </Badge>
              <span className="text-xs text-muted-foreground flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {challenge.timeEstimate}
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Star className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-1 mb-2">
            {challenge.tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-xs text-muted-foreground">
            Companies: {challenge.companies.join(', ')}
          </div>
        </div>
        
        <Button size="sm" className="w-full flex items-center justify-center">
          {challenge.completed ? 'Review Solution' : 'Solve Challenge'}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Challenges;
