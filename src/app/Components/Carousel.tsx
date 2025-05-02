import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { FaUserCircle } from "react-icons/fa"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const feedbacks = [
  {
    name: "Alice Johnson",
    feedback: "Great service and support! Highly recommend.",
  },
  {
    name: "Mark Williams",
    feedback: "User-friendly interface and smooth experience.",
  },
  {
    name: "Priya Sharma",
    feedback: "The team was responsive and professional.",
  },
  {
    name: "Carlos Diaz",
    feedback: "Outstanding quality and fast delivery!",
  },
  {
    name: "Sofia Zhang",
    feedback: "Five stars for reliability and ease of use.",
  },
]

export default function FeedbackCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
<Carousel
  plugins={[plugin.current]}
  className="relative w-full max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
  onMouseEnter={plugin.current.stop}
  onMouseLeave={plugin.current.reset}
>
  <CarouselContent>
    {feedbacks.map((item, index) => (
      <CarouselItem key={index} className="flex justify-center">
        <Card className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <CardContent className="flex flex-col items-center justify-center gap-4 p-8 text-center">
            <FaUserCircle className="text-6xl text-gray-500 dark:text-gray-300" />
            <p className="text-base italic text-gray-700 dark:text-gray-300">
              {item.feedback}
            </p>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              – {item.name}
            </h3>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>

  {/* Absolute positioning for buttons */}
  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
</Carousel>

  )
}
