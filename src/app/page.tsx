import Hero from "@/components/Home/Hero/Hero";
import NavBar from "@/components/Layout/NavBar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="bg-gray text-orange">
          <Hero />
      </main>
    </>
  );
}
