import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
  priority?: "high" | "low";
  poster?: string;
}

export function LazyVideo({
  src,
  className = "",
  priority = "low",
  poster,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(priority === "high");

  // For low priority videos, wait until near viewport
  // For high priority, load immediately
  const isInView = useInView(containerRef, {
    once: false,
    margin: priority === "high" ? "0px" : "200px",
  });

  // Determine when to start loading the video source
  useEffect(() => {
    if (priority === "high") {
      setShouldLoad(true);
    } else if (isInView && !shouldLoad) {
      setShouldLoad(true);
    }
  }, [isInView, priority, shouldLoad]);

  // Play/pause based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!(video && shouldLoad)) return;

    if (isInView) {
      video.play().catch(() => {
        // Autoplay may be blocked, that's okay
      });
    } else {
      video.pause();
    }
  }, [isInView, shouldLoad]);

  return (
    <div className={className} ref={containerRef}>
      <video
        autoPlay={priority === "high"}
        className="h-full w-full object-cover"
        loop
        muted
        playsInline
        poster={poster}
        preload={priority === "high" ? "metadata" : "none"}
        ref={videoRef}
      >
        {shouldLoad && <source src={src} type="video/mp4" />}
      </video>
    </div>
  );
}
