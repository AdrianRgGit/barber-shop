import NavBar from "@/components/Layout/NavBar/NavBar";

export default function Home() {
  return (
    <main className="orange h-full bg-gray">
      <div className="mb-24">
        <NavBar />
      </div>

      <p>Esto es el home</p>
    </main>
  );
}
