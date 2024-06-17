import Hero from "@/components/Home/Hero/Hero";
import NavBar from "@/components/Layout/NavBar/NavBar";
import OurTeam from "@/components/OurTeam/OurTeam";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <OurTeam />
      </main>
    </>
  );
}
