import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface Column {
  length: number;
  map: (callback: (index: number) => JSX.Element) => JSX.Element[];
}

const AproposPhotos = () => {
  const [inView, setInView] = useState<Set<number>>(new Set());
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Initialize on mount and handle resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    if (typeof window !== "undefined") {
      handleResize();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine number of images based on screen size
  const totalImages = windowWidth < 1024 ? 37 : 74;

  // Create column arrays for different screen sizes
  const getColumnArrays = (count: number, columnCount: number): number[][] => {
    const columns: number[][] = Array.from({ length: columnCount }, () => []);

    Array.from({ length: count }).forEach((_, index) => {
      columns[index % columnCount].push(index);
    });

    return columns;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0",
            10
          );
          if (entry.isIntersecting && !inView.has(index)) {
            setInView((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const images = containerRef.current?.querySelectorAll(".image");
    images?.forEach((image) => observer.observe(image));

    return () => {
      images?.forEach((image) => observer.unobserve(image));
    };
  }, [inView]);

  // Generate arrays for different column counts using the dynamic totalImages
  const fourColumns = getColumnArrays(totalImages, 4);
  const twoColumns = getColumnArrays(totalImages, 2);

  const renderImage = (index: number): JSX.Element => (
    <div
      key={index}
      data-index={index}
      className={`relative image mb-4 transform transition-all duration-500 ${
        inView.has(index)
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
    >
      <Image
        src={`/gallery/${index + 1}.jpg`}
        alt={`Gym Image ${index + 1}`}
        width={500}
        height={700}
        className="object-cover rounded-lg w-full"
        placeholder="blur"
        blurDataURL={`/gallery/${index + 1}_lowres.jpg`}
        priority={index < 5}
      />
    </div>
  );

  return (
    <div ref={containerRef} className="p-4 bg-black">
      {/* Large screens (4 columns) */}
      <div className="hidden lg:grid lg:grid-cols-4 lg:gap-4">
        {fourColumns.map((column, columnIndex) => (
          <div key={`col-lg-${columnIndex}`} className="flex flex-col">
            {column.map((index) => renderImage(index))}
          </div>
        ))}
      </div>

      {/* Small/Medium screens (2 columns) */}
      <div className="grid grid-cols-2 gap-4 lg:hidden">
        {twoColumns.map((column, columnIndex) => (
          <div key={`col-sm-${columnIndex}`} className="flex flex-col">
            {column.map((index) => renderImage(index))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AproposPhotos;
