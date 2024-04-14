import About from "@/components/About";
import Hero from "@/components/Hero/Hero";
import EventTimeline from "@/components/EventTimeline";
import Sponsors from "@/components/Sponsors/Sponsors";
import Head from "next/head";
import Footer from "@/components/Footer";
import StarsCanvas from "@/components/Hero/StarCanvas";

export default function Home() {
  return (
    <div data-theme="bwTheme" className="">
      <Head>
        <title>Blockchain Week</title>
        <meta name="description" content="Blockchain Week by IBF" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Hero />
        <EventTimeline />
        <About />
        <Sponsors />
        <Footer />
      </main>
      {/* <StarsCanvas /> */}
    </div>
  );
}
