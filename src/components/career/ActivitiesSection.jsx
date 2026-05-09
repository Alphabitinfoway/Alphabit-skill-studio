"use client";

import { useEffect, useState } from "react";
import { Carousel } from "@/components/application/carousel/carousel-base";
import CarouselCard from "./cards/CarouselCard";

export default function ActivitiesSection() {
  const [api, setApi] = useState(null);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="w-full py-24 mt-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 font-cabinet leading-tight">
          <span className="text-[#FF5722] font-pp italic font-normal text-4xl md:text-5xl">Upgrade</span> A Look Inside Our Collaborative<br />
          Off-Grid Activities and Milestones
        </h2>
      </div>

      <div className="w-full">
        <Carousel.Root opts={{ align: "center", loop: true }} setApi={setApi} className="w-full relative group">
          <Carousel.Content style={{ marginLeft: "-2rem" }}>
            {[1, 2, 3, 4].map((_, index) => (
              <Carousel.Item
                key={index}
                className="min-w-0 shrink-0 grow-0"
                style={{ flexBasis: "min(85%, 900px)", paddingLeft: "2rem" }}
              >
                <CarouselCard index={index} />
              </Carousel.Item>
            ))}
          </Carousel.Content>

          <div className="flex justify-center items-center mt-12">
            <Carousel.IndicatorGroup className="flex gap-3 flex-wrap justify-center max-w-[50vw]">
              {[1, 2, 3, 4].map((_, index) => (
                <Carousel.Indicator
                  key={index}
                  index={index}
                  className={({ isSelected }) =>
                    `h-2.5 rounded-full transition-all duration-300 ${isSelected ? "w-8 bg-[#b0b0b0]" : "w-2.5 bg-[#e5e7eb]"}`
                  }
                />
              ))}
            </Carousel.IndicatorGroup>
          </div>
        </Carousel.Root>
      </div>
    </section>
  );
}