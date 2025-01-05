import React, { useEffect, useState } from "react";
import Image from "next/image";

const AproposPhotos = () => {
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
    <div
      className="masonry-grid p-4 bg-black"
      style={{
        columnCount: 4,
        columnGap: "1rem",
      }}
    >
      {Array.from({ length: 74 }, (_, index) => (
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
  );
};

export default AproposPhotos;
