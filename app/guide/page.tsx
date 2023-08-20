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
    <h1 className='font-primary text-dark text-5xl flex items-center gap-5'><span
        className="rounded-full flex items-center justify-center text-2xl h-12 w-12 border-[3px] border-outlive-red">1</span>
      Organ Donation</h1>
    <hr className="w-24 border-outlive-red border-2 mt-4" />
    <p className="text-outlive-blue py-6">
      Organ Donation can be broadly classified as follows:
      <br /><br />
      
    </p>
  </div>

  <div className={cabin.className + ' w-screen text-cream bg-outlive-red px-8 py-12 md:py-24 md:px-48' }>
    <h1 className='font-primary text-cream text-5xl flex items-center gap-5'><span
        className="rounded-full flex items-center justify-center text-2xl h-12 w-12 border-[3px] border-cream">2</span>
      Find out which organs can be donated</h1>
    <hr className="w-24 border-cream border-2 mt-4" />
    <p className="text-cream py-6">Aenean at porta purus, sit amet scelerisque leo. Nunc finibus scelerisque posuere.
      Suspendisse magna odio, maximus vel bibendum eget, mattis nec lacus. Fusce maximus elementum nibh, quis vulputate
      purus feugiat sed. Nullam interdum venenatis odio eget ultricies. Duis viverra, enim sit amet tristique egestas,
      arcu turpis elementum velit, sed consectetur risus massa vitae diam.
      <br /><br />
      The following organs are donatable:
    </p>
    <div className="w-3/4 grid grid-cols-6 gap-4">
      <div className="rounded-lg border-2 text-center font-semibold border-cream p-3">
        Liver
      </div>
      <div className="rounded-lg border-2 text-center font-semibold border-cream p-3">
        Heart
      </div>
      <div className="rounded-lg border-2 text-center font-semibold border-cream p-3">
        Kidney
      </div>
      <div className="rounded-lg border-2 text-center font-semibold border-cream p-3">
        Pancreas
      </div>
      <div className="rounded-lg border-2 text-center font-semibold border-cream p-3">
        Lung
      </div>
      <div className="rounded-lg border-2 text-center font-semibold border-cream p-3">
        Bone
      </div>
      <div className="rounded-lg border-2 text-center font-semibold border-cream p-3">
        Cornea
      </div>
      <div className="rounded-lg border-2 text-center font-semibold border-cream p-3">
        Eye
      </div>
    </div>
  </div>

  <div className={cabin.className + ' w-screen text-dark bg-cream px-8 py-12 md:py-24 md:px-48' }>
    <h1 className='font-primary text-dark text-5xl flex items-center gap-5'><span
        className="rounded-full flex items-center justify-center text-2xl h-12 w-12 border-[3px] border-outlive-red">3</span>
      Lorem Ipsum</h1>
    <hr className="w-24 border-outlive-red border-2 mt-4 mb-2" />
    <p className="text-outlive-blue py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id commodo
      justo, rhoncus aliquam ante. Vestibulum quis congue nunc, id varius velit. Praesent odio leo, eleifend a cursus a,
      condimentum quis ipsum. Morbi vel tempor elit. Vivamus sed elit quis nulla pharetra pretium. Nullam dui felis,
      rhoncus eu rutrum vel, euismod et orci. Nulla facilisi. Vestibulum in rhoncus risus. Cras egestas luctus ex, et
      hendrerit ligula sodales quis. Proin sed auctor ex, ut aliquet dui. Proin vel luctus enim, sit amet sodales mi.
      Sed dapibus risus arcu, non tempor sapien consequat ut. Aliquam quis felis sit amet magna dapibus ornare tristique
      eu justo. Donec porta accumsan arcu, sodales lacinia lectus porta ut. Integer finibus vitae sapien in cursus.
      Proin vestibulum maximus hendrerit.
      <br /><br />
      The following criteria must be fulfilled by a donor signing up for organ donation:
    </p>
    <ul className="list-disc text-outlive-blue">
      <li>Lorem ipsum dolor</li>
      <li>Lorem ipsum dolor</li>
      <li>Lorem ipsum dolor</li>
    </ul>
  </div>

  <Outro />

  <Footer />
</main>
)
}