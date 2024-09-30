import * as React from "react"


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselProject() {
    return (
        <Carousel className="w-full">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="bg-red-500 w-full h-[300px] rounded-md">
                            <span className="text-4xl font-semibold">{index + 1}</span>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="bg-transparent hover:bg-transparent text-white/80 hover:text-white border-none -left-8" />
            <CarouselNext className="bg-transparent hover:bg-transparent text-white/80 hover:text-white border-none -right-8" />
        </Carousel>
    )
}
