"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const APropos = () => {
  const [inView, setInView] = useState<boolean[]>(new Array(37).fill(false)); // 37 images

  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll(".image");
      images.forEach((image, index) => {
        const rect = image.getBoundingClientRect();
        if (rect.top <= window.innerHeight && !inView[index]) {
          setInView((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inView]);

  return (
    <div className="space-t-16 bg-black">
      {/* Video Section with Text */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline // Ensures better behavior on mobile browsers
          controls={false}
        >
          <source src="gym.mp4" type="video/mp4" />
        </video>
        {/* Text Overlay */}
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold">
            À propos de nous
          </h2>
          <p className="mt-4 text-lg sm:text-xl">
            Bienvenue chez Équipe One X One, plus qu'un simple gymnase, une
            communauté passionnée par la boxe, la remise en forme et le
            dépassement de soi...
          </p>
        </div>
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </section>

      {/* Images Gallery - Masonry Layout */}
      <div
        className="masonry-grid p-4"
        style={{
          columnCount: 4,
          columnGap: "1rem",
        }}
      >
        {Array.from({ length: 37 }, (_, index) => (
          <div
            key={index}
            className={`relative image transform transition-all duration-500 ${
              inView[index]
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{
              breakInside: "avoid",
              marginBottom: "1rem",
            }}
          >
            <Image
              src={`/gallery/${index + 1}.jpg`}
              alt={`Gym Image ${index + 1}`}
              layout="intrinsic"
              width={500}
              height={700}
              className="object-cover rounded-lg"
              placeholder="blur"
              blurDataURL={`/gallery/${index + 1}_lowres.jpg`}
              priority={index < 5}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default APropos;
