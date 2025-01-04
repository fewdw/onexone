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
    <div className="space-y-16 bg-black">
      {/* Video Section - Full Screen */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="gym.mp4" type="video/mp4" />
        </video>

        {/* Centered Text */}
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="text-center text-white px-4 max-w-4xl w-full mx-auto">
            <h2 className="text-4xl sm:text-5xl font-semibold">
              À propos de nous
            </h2>
            <p className="mt-4 text-lg sm:text-xl">
              Bienvenue chez Équipe One X One, plus qu'un simple gymnase, une
              communauté passionnée par la boxe, la remise en forme et le
              dépassement de soi...
            </p>
          </div>
        </div>
      </div>

      {/* Images Gallery - Masonry Layout (Pinterest-like) */}
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
              breakInside: "avoid", // Prevent image from breaking across columns
              marginBottom: "1rem", // Adds space between images
            }}
          >
            <Image
              src={`/gallery/${index + 1}.jpg`}
              alt={`Gym Image ${index + 1}`}
              layout="intrinsic" // Use intrinsic layout for natural image aspect ratio
              width={500}
              height={700} // Adjusted aspect ratio for more control
              className="object-cover rounded-lg"
              placeholder="blur" // Use a low-res image first
              blurDataURL={`/gallery/${index + 1}_lowres.jpg`} // Low-res placeholder (ensure these exist)
              priority={index < 5} // Load first few images with high priority
            />
          </div>
        ))}
      </div>

      {/* Additional Sections */}
      <div className="text-center mt-16 px-4">
        <h3 className="text-3xl font-semibold">Notre approche</h3>
        <p className="mt-4 text-lg text-gray-600">
          Chez Équipe One X One, nous croyons que la boxe est bien plus qu'un
          sport : c'est un mode de vie. Nous proposons des cours adaptés à tous
          les objectifs...
        </p>
      </div>

      <div className="text-center mt-16 px-4">
        <h3 className="text-3xl font-semibold">Pourquoi choisir ?</h3>
        <p className="mt-4 text-lg text-gray-600">
          Coaching expert : Des entraîneurs expérimentés et dévoués qui vous
          accompagnent à chaque étape...
        </p>
      </div>

      <div className="text-center mt-16 px-4">
        <h3 className="text-3xl font-semibold">Notre vision</h3>
        <p className="mt-4 text-lg text-gray-600">
          Depuis plusieurs années, l'Équipe One X One s'efforce de devenir une
          référence dans la boxe et la remise en forme...
        </p>
      </div>
    </div>
  );
};

export default APropos;
