import About from "@/components/sections/About";
import Benefits from "@/components/sections/Benefits";
import Commited from "@/components/sections/Commited";
import Hero from "@/components/sections/Hero";
import Service from "@/components/sections/Service";
import Stat from "@/components/sections/Stat";
import React from "react";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>

      <section>
        <Stat />
      </section>

      <section>
        <Commited />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Service />
      </section>

      <section>
        <Benefits />
      </section>
    </>
  );
}
