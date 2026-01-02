"use client";

import Image from "next/image";
import { User, Heart, Star, GraduationCap, MapPin, Mail } from "lucide-react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { H2, H4 } from "../ui/heading";
import { P } from "../ui/typography";
import { Button } from "../ui/button";
import profileKo from "@/public/logo/profileko.jpg";
import PixelTransition from "../PixelTransition";
import JorDev from "@/public/logo/JorDevLogo.png";

export default function About() {
  return (
    <section className="screen min-h-screen p-20 flex flex-col items-center gap-8">
      <H2>About Me</H2>
      <div className="flex w-full p-4 gap-4">
        {/*left */}
        <div className="w-full space-y-4 ">
          <PixelTransition
            firstContent={
              <Image
                src={profileKo}
                alt="profile ko"
                fill
                sizes="200px"
                className="object-cover rounded-2xl"
              />
            }
            secondContent={
              <div className="w-full h-full grid place-items-center bg-white">
                <Image src={JorDev} alt="JorDev logo" className="w-24 h-auto" />
              </div>
            }
            gridSize={15}
            pixelColor="#000000"
            once={false}
            animationStepDuration={0.6}
            className="custom-pixel-card place-self-center"
          />

          {/* Info Cards */}
          <div className="space-y-3">
            <InfoCard
              icon={<GraduationCap className="w-5 h-5" />}
              label="Education"
              value="Ontario Tech University"
            />
            <InfoCard
              icon={<MapPin className="w-5 h-5 text-cyan-400" />}
              label="Location"
              value="Montalban, Rizal"
            />
            <InfoCard
              icon={<Mail className="w-5 h-5 text-cyan-400" />}
              label="Email"
              value="jorie@email.com"
            />
          </div>
        </div>

        {/* right*/}
        <div className="w-full space-y-4 text-center md:text- ">
          <Tabs defaultValue="story" className="w-full">
            {/* TAB BUTTONS */}
            <TabsList className="flex gap-2 bg-transparent justify-center md:justify-start">
              <TabsTrigger value="story" className="flex gap-2 p-4">
                <User className="w-4 h-4" />
                My Story
              </TabsTrigger>

              <TabsTrigger value="interests" className="flex gap-2">
                <Heart className="w-4 h-4" />
                Interests
              </TabsTrigger>

              <TabsTrigger value="facts" className="flex gap-2">
                <Star className="w-4 h-4" />
                Fun Facts
              </TabsTrigger>
            </TabsList>

            {/* TAB CONTENT */}
            <TabsContent value="story">
              <P>
                I'm Jorie Visaya, a 21-year-old 4th-year college student
                passionate <br />
                about web development using Next.js.
                <br />I love solving business problems through code and
                experimenting <br />
                with creative solutions as a vibe coder.
                <br />
                When I'm not coding, you'll find me at the gym doing
                powerlifting <br />
                or playing badminton.
              </P>
            </TabsContent>

            <TabsContent value="interests">
              <ListItem emoji="💻" title="Web Development">
                Building modern web apps with Next.js, React, and TypeScript
              </ListItem>
              <ListItem emoji="🏋️" title="Powerlifting">
                Staying strong and disciplined through training
              </ListItem>
              <ListItem emoji="🏸" title="Badminton">
                Playing competitively and staying active
              </ListItem>
              <ListItem emoji="🚀" title="Hackathons">
                Building innovative projects under pressure
              </ListItem>
            </TabsContent>

            <TabsContent value="facts">
              <ListItem emoji="🎯" title="Goal-Oriented">
                Working toward becoming a software engineer
              </ListItem>
              <ListItem emoji="🌱" title="Continuous Learner">
                Always improving my skillset
              </ListItem>
              <ListItem emoji="🎨" title="Vibe Coder">
                Loves creative coding solutions
              </ListItem>
              <ListItem emoji="🎓" title="4th Year Student">
                Final year of Computer Science
              </ListItem>
            </TabsContent>
          </Tabs>

          <Button>Contact me</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Small Helper Components ---------- */

function InfoCard({ icon, label, value }: any) {
  return (
    <div className="flex items-center gap-3 p-3 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50">
      <div className="bg-slate-800/30 p-2 rounded-lg">{icon}</div>
      <div>
        <P className="text-xs text-slate-400">{label}</P>
        <P className="text-sm font-medium">{value}</P>
      </div>
    </div>
  );
}

function ListItem({ emoji, title, children }: any) {
  return (
    <div className="flex items-start gap-3 mb-3 text-left">
      <span className="text-2xl">{emoji}</span>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm opacity-80">{children}</p>
      </div>
    </div>
  );
}
