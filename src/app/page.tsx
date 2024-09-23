import { About } from "@/components/about";
import { Apresentation } from "@/components/apresentation";
import { ContactMe } from "@/components/contact_me";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="grid grid-rows-[auto,1fr,auto] min-h-screen bg-[#171023] p-24 gap-8 pt-[100px]">
      <Header />
      <Apresentation />
      <About />
      <Projects />
      <ContactMe />
      <Footer />
    </main>
  );
}
