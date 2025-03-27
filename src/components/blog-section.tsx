"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";

// Mock blog posts data - in production this would come from PayloadCMS
const mockBlogPosts = [
  {
    id: "1",
    title: "The Rise of Open Banking in Canada",
    slug: "rise-of-open-banking-canada",
    author: "Sarah Johnson",
    publishedDate: "2025-03-15",
    excerpt: "Exploring how open banking is transforming the financial landscape in Canada and what it means for consumers and businesses.",
    categories: ["Open Banking", "Regulation"],
    featuredImage: "/placeholder-blog.jpg"
  },
  {
    id: "2",
    title: "AI-Powered Fraud Detection: The Future of Financial Security",
    slug: "ai-powered-fraud-detection",
    author: "Michael Chen",
    publishedDate: "2025-03-10",
    excerpt: "How artificial intelligence and machine learning are revolutionizing fraud detection and prevention in financial services.",
    categories: ["AI", "Security"],
    featuredImage: "/placeholder-blog.jpg"
  },
  {
    id: "3",
    title: "Toronto's Fintech Ecosystem: 2025 Growth Report",
    slug: "toronto-fintech-ecosystem-2025",
    author: "Priya Patel",
    publishedDate: "2025-03-05",
    excerpt: "A comprehensive analysis of Toronto's fintech landscape, key players, investment trends, and growth opportunities.",
    categories: ["Market Analysis", "Investment"],
    featuredImage: "/placeholder-blog.jpg"
  }
];

export function BlogSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest news, trends, and insights from Toronto's fintech community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {mockBlogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col h-full">
              <div className="aspect-video w-full bg-muted overflow-hidden">
                <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-muted-foreground">
                  Featured Image
                </div>
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.categories.map((category, index) => (
                    <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {category}
                    </span>
                  ))}
                </div>
                <CardTitle className="line-clamp-2">
                  <a href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </a>
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.publishedDate}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a href={`/blog/${post.slug}`}>Read More</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild size="lg">
            <a href="/blog">View All Articles</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
