import Header from "@/components/Header"
import Outro from "@/components/Outro"
import Team from "@/components/Team"
import Footer from "@/components/Footer"
import SubpageHero from "@/components/SubpageHero"
import { Cabin } from 'next/font/google'

const cabin = Cabin({subsets: ['latin'], weight: 'variable'})

export default function Home() {
  return (
    <main>
      
      <Header />

      <SubpageHero page="About Us"/>


      <div className={cabin.className + ' w-screen bg-cream px-8 py-12 md:py-24 flex items-center gap-12 flex-col md:flex-row md:px-48'}>
        <div className="w-full md:w-3/5">
          <h1 className='font-primary text-dark text-5xl md:text-6xl'>Outlive Yourself</h1>
          <hr className="w-16 border-outlive-blue border-2 mt-4" />
          <p className='py-4'>
          In association with National Organ and Tissue Transplant Organization (NOTTO) set up with the Ministry Of Health and Family Welfare, the students of Tagore International School, Vasant Vihar are launching PROJECT OUTLIVE YOURSELF, to generate awareness about the profound significance of ORGAN DONATION.
          <br /><br />
          TIS,VV has established itself as an institution, known for its social service initiatives that are entirely student-driven. We are pioneers in initiating and implementing social awareness campaigns on various issues pertaining to society viz. Breaking Barriers (an initiative for LGBTQI community), Flawless Flaws (in support of acid attack survivors), Project Saksham(supporting, valuing and advocating inclusion) and Project Sehpaathi (a social outreach program for inclusive education) just to name a few. 
          <br /><br />
          &quot;Outlive Yourself&quot; is a call to action, challenging societal norms and igniting conversations about the gift of life. Through education and community events, we aim to empower individuals with knowledge and dispel fears surrounding organ donation.
          <br /><br />
          In an effort to make organ donation a core social value &quot;Outlive Yourself&quot; seeks to raise awareness and improve understanding of organ & tissue donations.
          </p>
        </div>
        <img src='/about.jpg' className='w-full md:w-2/5 object-cover rounded-t-full h-80 md:h-[30rem]'></img>
      </div>

      <hr className="mx-8 md:mx-48 border-[#a7a7a4]" />

      <Team />

      <Outro />

      <Footer />
    </main>
  )
}
