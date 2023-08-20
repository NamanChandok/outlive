import Header from "@/components/Header"
import Outro from "@/components/Outro"
import Footer from "@/components/Footer"
import SubpageHero from "@/components/SubpageHero"
import { Cabin } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const cabin = Cabin({subsets: ['latin'], weight: 'variable'})

export default function Home() {
  return (
    <main>
      
      <Header />

      <SubpageHero page="Contact Us"/>

      <div className={cabin.className + ' w-screen bg-cream px-8 py-12 md:py-24 flex items-center text-center flex-col md:px-48'}>
          <h1 className='font-primary text-dark text-5xl md:text-6xl'>Contact Us</h1>
          <hr className="w-16 border-outlive-blue border-2 mt-4 mb-6 mx-auto" />
          <ul className="text-left self-center rounded-md border-2 border-[#a7a7a4] md:w-3/5 md:px-12 p-8">
              <span className="text-sm text-outlive-blue tracking-widest">CAMPAIGN OFFICE</span>
              <h1 className="text-3xl font-primary font-semibold pt-2 pb-8">New Delhi, India</h1>
              <li className="flex items-center gap-3 py-2"><div className="h-10 w-10 rounded-full bg-outlive-red/20 flex items-center justify-center text-outlive-red"><FontAwesomeIcon icon={faPhone} className="h-4" /></div> +91 8130548500</li>
              <li className="flex items-center gap-3 py-2"><div className="h-10 w-10 rounded-full bg-outlive-red/20 flex items-center justify-center text-outlive-red"><FontAwesomeIcon icon={faEnvelope} className="h-4" /></div> projectoutliveyourself@gmail.com</li>
              <li className="flex items-center gap-3 py-2"><div className="h-10 w-10 rounded-full bg-outlive-red/20 flex items-center justify-center text-outlive-red"><FontAwesomeIcon icon={faMap} className="h-4" /></div> Tagore International School, Vasant Vihar, New Delhi - 110057</li>
          </ul>
      </div>

      <hr className="mx-8 md:mx-48 border-[#a7a7a4]" />

      <section id="map">
        <div className={cabin.className + ' w-screen bg-cream px-8 py-12 md:py-24 flex items-center gap-12 flex-col md:flex-row md:px-48'}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4544.111003618863!2d77.16156048413856!3d28.5701053146976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1da64b31037f%3A0x9fe8114b5940d45c!2sTagore%20International%20School!5e0!3m2!1sen!2sin!4v1689677106003!5m2!1sen!2sin" className="w-full h-[30em]" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

      <Outro />

      <Footer />
    </main>
  )
}
