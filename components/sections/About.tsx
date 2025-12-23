'use client'
import Image from "next/image";
import dynamic from "next/dynamic";
import { H2 } from "../ui/heading";
import { P } from "../ui/typography";
import { Button } from "../ui/button";
import profileKo from "@/public/logo/profileko.jpg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic<typeof import("react-slick").default>(
  () => import("react-slick"),
  { ssr: false }
);


export default function About() {
  const settings = {
    dots: true,           // shows navigation dots
    infinite: true,       // infinite loop
    speed: 500,           // animation speed
    slidesToScroll: 1,
    fade: true,           // fade effect
    autoplay: true,
    autoplaySpeed: 3000,  // 3s per slide
    arrows: false         // hide arrows
  };

  return (
    <section className="screen min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-16">
      
      {/* Slider Container */}
      <div className="w-64 md:w-80">
        <Slider {...settings}>
          <div>
            <Image
              src={profileKo}
              alt="profile ko"
              height={300}
              width={300}
              className="rounded-full object-cover mx-auto"
            />
          </div>
          <div>
            <Image
              src={profileKo}
              alt="profile ko 2"
              height={300}
              width={300}
              className="rounded-full object-cover mx-auto"
            />
          </div>
        </Slider>
      </div>

      {/* Text Container */}
      <div className="max-w-xl space-y-4 text-center md:text-left">
        <H2>About Me</H2>
        <P>
          I’m Jorie Visaya, a 21-year-old 4th-year college student passionate
          about web development using Next.js.
          <br />
          I love solving business problems through code and experimenting with
          creative solutions as a vibe coder.
          <br />
          When I’m not coding, you’ll find me at the gym doing powerlifting or
          playing badminton.
          <br />
          I’m constantly improving my skills, open to learning new things, and
          working toward my goal of becoming a software engineer.
        </P>
        <Button>Contact me</Button>
      </div>
    </section>
  );
}
