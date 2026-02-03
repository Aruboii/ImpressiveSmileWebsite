import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useReviews() {
  return useQuery({
    queryKey: ["/reviews.json"],
    queryFn: async () => {
      const res = await fetch("/reviews.json");
      if (!res.ok) throw new Error("Failed to fetch reviews");
      return await res.json();
    },
  });
}

export function useFaqs() {
  return useQuery({
    queryKey: ["/faqs.json"],
    queryFn: async () => {
      const res = await fetch("/faqs.json");
      if (!res.ok) throw new Error("Failed to fetch FAQs");
      return await res.json();
    },
  });
}

export function useServices() {
  return useQuery({
    queryKey: ["/services.json"],
    queryFn: async () => {
      const res = await fetch("/services.json");
      if (!res.ok) throw new Error("Failed to fetch services");
      return await res.json();
    },
  });
}
