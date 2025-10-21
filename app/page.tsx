"use client";

import { useState } from "react";
import { CheckCircle2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-[#0EA5E9]/10 text-[#0EA5E9] border-[#0EA5E9]/20 px-4 py-2 rounded-full">
            <CheckCircle2 className="w-4 h-4 mr-2 inline" />
            Trusted by 1,000+ GoHighLevel Marketers
          </Badge>

          <h1 className="text-gray-900 mb-6 max-w-5xl mx-auto text-5xl md:text-6xl lg:text-7xl leading-tight">
            Master GoHighLevel & Build Your <span className="text-[#0EA5E9]">Marketing Empire</span>
          </h1>

          <p className="text-gray-600 mb-10 max-w-3xl mx-auto text-xl">
            Learn proven strategies to leverage GoHighLevel for business growth, client acquisition, and scalable revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button className="bg-[#0EA5E9] text-white hover:bg-[#0EA5E9]/90 rounded-full px-10 py-7 shadow-lg shadow-[#0EA5E9]/20 text-lg">
              Read Guides
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-2 border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-gray-400 rounded-full px-10 py-7 text-lg"
            >
              Watch Tutorials
            </Button>
          </div>
        </div>

        {/* Video Demo Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200 border border-gray-200 bg-gray-100">
            <div className="aspect-video">
              {!isVideoPlaying ? (
                <div
                  className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 flex flex-col items-center justify-center cursor-pointer group"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <div className="w-20 h-20 bg-[#0EA5E9] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#0EA5E9]/30">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                  <p className="text-gray-900 text-xl">Watch the Platform Demo</p>
                  <p className="text-gray-600 mt-2">See how GoHighLevel transforms your business</p>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="GoHighLevel Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">
            Replace the YouTube video ID with your actual demo video
          </p>
        </div>
      </div>
    </section>
  );
}
