import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
        <AlertCircle className="w-8 h-8 text-destructive" />
      </div>
      
      <h1 className="text-4xl font-heading font-bold mb-4 text-center">Page Not Found</h1>
      <p className="text-muted-foreground text-center max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <Link href="/">
        <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
          Return to Home
        </Button>
      </Link>
    </div>
  );
}
