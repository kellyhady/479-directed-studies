"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Carousel, { CarouselItem } from "../../components/carousel.jsx";

function Home() {
  return (
    <>
      <nav className="border-b-1 border-b-black">
        <h1 className="text-center text-4xl font-display">
          The Populist Archives
        </h1>
        <h3 className="text-center text-mid font-serif uppercase mb-1">
          <Link href="/">About</Link>
        </h3>
      </nav>
      <main className="min-h-screen bg-white">
        <div className="grid flex-rows-3">
          <div className="carousel-wrap">
            <Carousel>
              <CarouselItem>
                <a href="/profile-ahmad">
                  <Image
                    src="/images/profile-ahmadinejad.png"
                    fill={true}
                    style={{ objectFit: "cover" }}
                  ></Image>
                </a>
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/images/profile-boris.png"
                  fill={true}
                  style={{
                    objectFit: "cover",
                  }}
                ></Image>
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/images/profile-mzd.png"
                  fill={true}
                  style={{ objectFit: "cover" }}
                ></Image>
              </CarouselItem>
            </Carousel>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
