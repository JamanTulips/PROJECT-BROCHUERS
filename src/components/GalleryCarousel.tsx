"use client";

import { useMemo, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./GalleryCarousel.module.css";

const galleryImages = [
  { src: "/img/conference.jpeg", alt: "Conference presentation slide" },
  { src: "/img/rsna.jpeg", alt: "RSNA conference banner" },
  { src: "/img/radcon.jpeg", alt: "RADCON event stage" },
  // { src: "/img/hisworkflow.jpeg", alt: "Healthcare information system workflow" },
  // { src: "/img/japannext.jpeg", alt: "Japan Next presentation" },
  { src: "/img/pspcorporation.jpeg", alt: "PSP corporation presentation" },
  // { src: "/img/psplogo.jpeg", alt: "PSP corporation logo" },
  { src: "/img/radconhurdle.jpeg", alt: "RADCON hurdle presentation" },
  { src: "/img/rsnanext.jpeg", alt: "RSNA next presentation" },
  { src: "/img/confrsna.jpeg", alt: "confrsna next presentation" },
  // { src: "/img/saiiteklogo.jpeg", alt: "Saiitek logo" },
  // { src: "/img/statesflag.jpeg", alt: "United States flag" },
  // { src: "/img/thaiflag.jpeg", alt: "Thailand flag" },
];

function subscribeToResize(callback: () => void) {
  window.addEventListener("resize", callback);

  return () => window.removeEventListener("resize", callback);
}

function getViewportWidth() {
  return window.innerWidth;
}

function getServerViewportWidth() {
  return 1200;
}

export default function GalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const viewportWidth = useSyncExternalStore(
    subscribeToResize,
    getViewportWidth,
    getServerViewportWidth,
  );

  const visibleCards = viewportWidth < 640 ? 1 : viewportWidth < 1024 ? 2 : 3;

  const maxIndex = useMemo(
    () => Math.max(galleryImages.length - visibleCards, 0),
    [visibleCards],
  );

  const currentIndex = Math.min(activeIndex, maxIndex);

  const scrollToIndex = (index: number) => {
    const viewport = viewportRef.current;
    const card = viewport?.querySelectorAll<HTMLElement>(`.${styles.card}`)[
      index
    ];

    if (!viewport || !card) {
      return;
    }

    viewport.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });
  };

  const goToPrevious = () => {
    const nextIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
    setActiveIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const goToNext = () => {
    const nextIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
    setActiveIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    scrollToIndex(index);
  };

  return (
    <section
      id="gallery"
      className={styles.section}
      aria-labelledby="gallery-title"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 id="gallery-title">Gallery</h2>
          <span aria-hidden="true" />
        </div>

        <div className={styles.carouselShell}>
          <button
            type="button"
            className={`${styles.arrowButton} ${styles.arrowLeft}`}
            aria-label="Show previous gallery image"
            onClick={goToPrevious}
          >
            <ChevronLeft size={18} strokeWidth={1.8} />
          </button>

          <div className={styles.viewport} ref={viewportRef}>
            <div className={styles.track}>
              {galleryImages.map((image) => (
                <article className={styles.card} key={image.src}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 639px) 82vw, (max-width: 1023px) 42vw, 360px"
                    className={styles.image}
                  />
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={`${styles.arrowButton} ${styles.arrowRight}`}
            aria-label="Show next gallery image"
            onClick={goToNext}
          >
            <ChevronRight size={18} strokeWidth={1.8} />
          </button>
        </div>

        <div className={styles.dots} aria-label="Gallery pagination">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              type="button"
              key={index}
              className={`${styles.dot} ${
                currentIndex === index ? styles.activeDot : ""
              }`}
              aria-label={`Go to gallery slide ${index + 1}`}
              aria-current={currentIndex === index ? "true" : undefined}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
