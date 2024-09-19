import { About } from "@/components/about";
import { Apresentation } from "@/components/apresentation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="grid grid-rows-[auto,1fr,auto] min-h-screen bg-[#171023] p-24 gap-8">
      <Header />
      <Apresentation />
      <About />
      <h1>Aqui vai ficar as paradas</h1>
      <Footer />
    </main>
  );
}
