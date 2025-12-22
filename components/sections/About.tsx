import React from "react";
import Image from "next/image";
import { H2 } from "../ui/heading";
import { P } from "../ui/typography";
import { Button } from "../ui/button";
import profileKo from "@/public/logo/profileko.jpg";

export default function About() {
  return (
    <section className="screen min-h-screen place-content-center  ">
      <div className="flex justify-evenly">
        {/* left container */}
        <div className="outline outline-red-500">
          <Image
            src={profileKo}
            alt="profile ko"
            height={300}
            width={300}
            className="rounded-xl object-cover"
          />
        </div>

        {/* right container */}
        <div className=" max-w-xl outline outline-red-500 space-y-2">
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
      </div>
    </section>
  );
}
