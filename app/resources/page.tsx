import Header from "@/components/Header"
import Outro from "@/components/Outro"
import Footer from "@/components/Footer"
import SubpageHero from "@/components/SubpageHero"
import { Cabin } from 'next/font/google'
import Resource from "@/components/Resource"

import { resourcesData } from "./resourcesdata"

const cabin = Cabin({subsets: ['latin'], weight: 'variable'})

export default function Home() {
  return (
    <main>
      
        <Header />

        <SubpageHero page="Resources"/>

        <div className={cabin.className + ' w-screen bg-cream px-8 py-12 md:py-24 flex items-center text-center flex-col md:px-48'}>
            <h1 className='font-primary text-dark text-5xl md:text-6xl'>Resources</h1>
            <hr className="w-16 border-outlive-blue border-2 mt-4 mb-6 mx-auto" />

            <h3 className="font-primary text-left text-dark text-3xl py-4 w-full md:w-4/5">Hospitals</h3>
            <div className="grid md:grid-cols-4 gap-6 w-full md:w-4/5">            
              {resourcesData.hospitals.map((resource, i) => (
                <Resource key={i} {...resource}/>
               ))} 
            </div>

            
            <h3 className="font-primary text-left text-dark text-3xl py-4 w-full md:w-4/5">Venues</h3>
            <div className="grid md:grid-cols-4 gap-6 w-full md:w-4/5">            
              {resourcesData.venues.map((resource, i) => (
                <Resource key={i} {...resource}/>
               ))} 
            </div>
        </div>

        <Outro />

        <Footer />
    </main>
  )
}
