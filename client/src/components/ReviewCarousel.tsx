import { useReviews } from "@/hooks/use-content";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Fallback reviews
const defaultReviews = [
  {
    name: "Priya Sharma",
    rating: 5,
    comment: "The Doctor is very good has a very pleasing personality, she handled my son who is just 5 and could figure out the problem quickly. Highly impressed with her skills.",
    date: "2 months ago"
  },
  {
    name: "Rahul Verma",
    rating: 5,
    comment: "Dr. Madhulika is very gentle, patient and caring. I went for a post RCT crown fitting on a broken molar. It was complex, but she handled it with ease.",
    date: "1 month ago"
  },
  {
    name: "Anjali K.",
    rating: 5,
    comment: "Cleanest clinic I've visited in Bangalore. The treatment was painless and affordable. Dr. Madhulika explains everything clearly before starting.",
    date: "3 weeks ago"
  }
];

export function ReviewCarousel() {
  const { data: reviews } = useReviews();
  const displayReviews = reviews && reviews.length > 0 ? reviews : defaultReviews;

  return (
    <section id="reviews" className="py-24 bg-background relative">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Patient Stories</h3>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {displayReviews.map((review, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full">
                  <Card className="h-full bg-card/50 border-border hover:border-primary/30 transition-colors">
                    <CardContent className="flex flex-col justify-between p-6 h-full">
                      <div>
                        <Quote className="w-8 h-8 text-primary/40 mb-4" />
                        <p className="text-muted-foreground mb-6 italic line-clamp-4">
                          "{review.comment}"
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
                        <Avatar className="h-10 w-10 border border-primary/20">
                          <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${review.name}`} />
                          <AvatarFallback>{review.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-semibold text-white">{review.name}</p>
                          <div className="flex items-center gap-1 mt-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-3 h-3 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-slate-600"}`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-[-50px] border-primary/20 hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="right-[-50px] border-primary/20 hover:bg-primary hover:text-primary-foreground" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
