import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Team from "@/components/Team"
import Outro from "@/components/Outro"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      
      <Header />
      
      <section id="home">
        <Hero />
      </section>

      <div className="p-8 md:p-12 md:px-40 bg-outlive-red grid md:grid-cols-3 gap-12 justify-center text-cream">
        <div className="text-center">
          <h4 className="text-5xl font-primary">74%</h4>
          <p className="pt-4 uppercase tracking-wide">population willing to donate</p>
        </div>
        <div className="text-center">
          <h4 className="text-5xl font-primary">8</h4>
          <p className="pt-4 uppercase tracking-wide">lives can be saved by 1 person</p>
        </div>
        <div className="text-center">
          <h4 className="text-5xl font-primary">95k</h4>
          <p className="pt-4 uppercase tracking-wide">potential organ donors</p>
        </div>
      </div>

      <section id="about">
        <About />
      </section>

      <hr className="mx-8 md:mx-48 border-[#a7a7a4]" />

      <section id="team">
        <Team />
      </section>

      <Outro />

      <Footer />
    </main>
  )
}
