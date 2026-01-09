"use client"

import Image from "next/image"
import { HeroSectionImage } from "@/constants/images"

export default function DiscoverSection() {

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        {/* Two Column Grid Layout - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight text-balance">
              Discover place of faith, prayer, and divine guidancee
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              We are a community shaped by prayer, Scripture, and daily life. Across seasons and generations, we gather
              to celebrate the liturgy, support one another, and walk together in faith. Our doors are open, to the
              curious, the searching, and the faithful alike.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Contact Now Button */}
              <button className="px-6 sm:px-8 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300">
                Contact Now
              </button>

              {/* Join Now Button with WhatsApp Icon */}
              <button className="px-6 sm:px-8 py-3 rounded-full bg-blue-900 text-white font-semibold hover:bg-blue-800 transition-all duration-300 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.718.738 5.33 2.14 7.59l-2.275 8.324a.75.75 0 00.934.933l8.324-2.276a9.868 9.868 0 007.59 2.14c5.435 0 9.87-4.434 9.87-9.868s-4.435-9.87-9.868-9.87zm0 18.169a8.122 8.122 0 01-6.312-2.851l-.454-.303-4.701 1.288 1.288-4.701-.303-.454a8.113 8.113 0 012.851-6.312 8.132 8.132 0 018.132 0 8.122 8.122 0 010 11.493 8.115 8.115 0 01-8.132 0z" />
                </svg>
                Join Now
              </button>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Top Image - With Play Button Overlay */}
            <div className="relative w-full rounded-3xl overflow-hidden aspect-video bg-gray-200">
              <Image
                src={HeroSectionImage}
                alt="People praying in church"
                fill
                className="object-cover"
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-all duration-300 flex items-center justify-center cursor-pointer group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 border border-white/40">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
