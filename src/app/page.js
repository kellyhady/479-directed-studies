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

        <h3 className="mt-1 mb-3 text-center text-mid font-normal">
          CMNS479 directed studies project, in collaboration with CMNS432
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
                <a href="/profile-boris">
                  <Image
                    src="/images/profile-johnson.png"
                    fill={true}
                    style={{ objectFit: "cover" }}
                  ></Image>
                </a>
              </CarouselItem>
              <CarouselItem>
                <a href="/profile-mzd">
                  <Image
                    src="/images/profile-mzd.png"
                    fill={true}
                    style={{ objectFit: "cover" }}
                  ></Image>
                </a>
              </CarouselItem>
              <CarouselItem>
                <a href="/profile-rahman">
                  <Image
                    src="/images/profile-rahman.png"
                    fill={true}
                    style={{ objectFit: "cover" }}
                  ></Image>
                </a>
              </CarouselItem>
            </Carousel>
          </div>
        </div>
      </main>
      <footer>
        <h3 className="uppercase text-center text-sm font-serif">
          Developed by Kelly Hady
        </h3>
        <h3 className="uppercase text-center text-sm font-serif mb-3">
          Under the supervision of Dr. Daniel Ahadi
        </h3>
      </footer>
    </>
  );
}

export default Home;
