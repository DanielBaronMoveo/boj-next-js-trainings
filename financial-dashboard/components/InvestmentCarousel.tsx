"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import InvestmentCard from "./InvestmentCard";
import { Investment } from "@/lib/investments";

export default function InvestmentCarousel({
  investments,
}: {
  investments: Investment[];
}) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: "trimSnaps",
      dragFree: false,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  //   useEffect(() => {
  //     async function fetchInvestments() {
  //       try {
  //         const response = await fetch("/api/investments");
  //         const data = await response.json();

  //         // Create multiple copies for smooth infinite scroll
  //         const repeatedData = [...data, ...data, ...data];
  //         setInvestments(repeatedData);
  //       } catch (error) {
  //         console.error("Error fetching investments:", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }

  //     fetchInvestments();
  //   }, []);

  if (!investments || investments.length === 0) {
    return (
      <div className="embla max-w-full">
        <div className="embla__container">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_90%] min-w-0 pl-4 sm:flex-[0_0_45%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%]"
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-sm min-h-[280px] animate-pulse">
                <div className="h-8 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-3 w-3/4"></div>
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="embla max-w-full" ref={emblaRef}>
      <div className="embla__container">
        {investments.map((investment, index) => (
          <div
            key={`${investment.id}-${index}`}
            className="embla__slide flex-[0_0_90%] min-w-0 pl-4 sm:flex-[0_0_45%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%]"
          >
            <InvestmentCard {...investment} />
          </div>
        ))}
      </div>
    </div>
  );
}
