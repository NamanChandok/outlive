import Header from "@/components/Header"
import Outro from "@/components/Outro"
import Footer from "@/components/Footer"
import SubpageHero from "@/components/SubpageHero"
import { Cabin } from 'next/font/google'
import Update from "@/components/Update"
import { UpdateInterface } from "@/components/UpdateData"

import { updatesData } from "./updatesdata"

const cabin = Cabin({subsets: ['latin'], weight: 'variable'})

export default function Home() {
  return (
    <main>
      
        <Header />

        <SubpageHero page="Updates"/>

        <div className={cabin.className + ' w-screen bg-cream px-8 py-12 md:py-24 flex items-center text-center flex-col md:px-48'}>
            <h1 className='font-primary text-dark text-5xl md:text-6xl'>Updates</h1>
            <hr className="w-16 border-outlive-blue border-2 mt-4 mb-6 mx-auto" />
            
            {updatesData.length == 0 ? <h1 className="text-outlive-blue">No updates yet</h1> : updatesData.map((update:UpdateInterface, i) => {
                return <Update key={i} {...update} />
              })}
        </div>

        <Outro />

        <Footer />
    </main>
  )
}
