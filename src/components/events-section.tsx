"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";

// Mock events data - in production this would come from PayloadCMS
const mockEvents = [
  {
    id: "1",
    title: "Toronto Fintech Week",
    date: "2025-04-15",
    time: "9:00 AM - 5:00 PM",
    location: "Metro Toronto Convention Centre",
    description: "A week-long celebration of fintech innovation in Toronto with keynotes, panels, and networking opportunities.",
    isExternal: false,
    image: "/placeholder-event.jpg"
  },
  {
    id: "2",
    title: "Blockchain & Digital Assets Summit",
    date: "2025-05-10",
    time: "10:00 AM - 4:00 PM",
    location: "MaRS Discovery District",
    description: "Explore the latest trends in blockchain technology and digital assets with industry leaders.",
    isExternal: false,
    image: "/placeholder-event.jpg"
  },
  {
    id: "3",
    title: "Women in Fintech Meetup",
    date: "2025-04-22",
    time: "6:00 PM - 8:30 PM",
    location: "Scotiabank Digital Factory",
    description: "Networking event for women in the fintech industry to connect, share experiences, and build relationships.",
    isExternal: true,
    lumaUrl: "https://lu.ma/sample-event-1",
    image: "/placeholder-event.jpg"
  },
  {
    id: "4",
    title: "AI in Financial Services Workshop",
    date: "2025-05-05",
    time: "1:00 PM - 5:00 PM",
    location: "TD Innovation Lab",
    description: "Hands-on workshop exploring practical applications of AI in financial services.",
    isExternal: true,
    lumaUrl: "https://lu.ma/sample-event-2",
    image: "/placeholder-event.jpg"
  }
];

export function EventsSection() {
  const [visibleEvents, setVisibleEvents] = useState(3);
  
  const handleLoadMore = () => {
    setVisibleEvents(mockEvents.length);
  };
  
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the latest fintech events in Toronto, including meetups, conferences, workshops, and networking opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {mockEvents.slice(0, visibleEvents).map((event) => (
            <Card key={event.id} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {event.description}
                </p>
              </CardContent>
              <CardFooter>
                {event.isExternal ? (
                  <Button asChild className="w-full">
                    <a href={event.lumaUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <span>View on Lu.ma</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                ) : (
                  <Button asChild className="w-full">
                    <a href={`/events/${event.id}`}>View Details</a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {visibleEvents < mockEvents.length && (
          <div className="text-center">
            <Button onClick={handleLoadMore} variant="outline" size="lg">
              Load More Events
            </Button>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="default">
            <a href="/events">View All Events</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="ml-4">
            <a href="/events/submit">Submit Event</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
