import Header from "@/components/Header"
import Outro from "@/components/Outro"
import Footer from "@/components/Footer"
import SubpageHero from "@/components/SubpageHero"
import { Cabin } from 'next/font/google'

const cabin = Cabin({subsets: ['latin'], weight: 'variable'})

export default function Home() {
return (
<main>

  <Header />

  <SubpageHero page="Donor Guide" />

  <div className={cabin.className + ' w-screen text-dark bg-cream px-8 py-12 md:py-24 md:px-48' }>
    <h1 className='font-primary text-dark text-5xl flex items-center gap-5'>How can you be an Organ Donor?</h1>
    <hr className="w-24 border-outlive-red border-2 mt-4" />
    <p className="text-outlive-blue py-6 text-xl">
    <ul className="list-disc text-outlive-blue grid gap-2">
      <li>You can be an organ donor by expressing your wish in the <a href="https://goo.by/NbGPq" className="underline decoration-outlive-red underline-offset-2">authorized organ and tissue donation form</a> (Form 7 as per THOA).</li>
      <li>You may pledge to donat your organs by signing up with our <a href="https://goo.by/NbGPq" className="underline decoration-outlive-red underline-offset-2">form here</a> or by scanning this QR Code:</li>
      <img src="/form_qr.jpg" alt="QR Code" />
      <li>For further information you can visit <a href="http://www.notto.gov.in" className="underline decoration-outlive-red underline-offset-2">www.notto.gov.in</a></li>
    </ul>
    </p>
  </div>

  <Outro />

  <Footer />
</main>
)
}