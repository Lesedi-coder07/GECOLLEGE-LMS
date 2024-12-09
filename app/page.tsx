import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { MobileMenu } from "@/components/mobile-menu"
import { Footer } from "@/components/footer"

export default function Home() {
  return (<> 
  {/* Navigation */}
  <div className="sticky flex w-full justify-around shadow-lg bg-white items-center top-0 left-0 right-0 z-50">
    <Header />
    <MobileMenu />
  </div>
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-[#1C1B1F] text-white text-center py-2 px-4">
        <p className="text-sm text-wrap">
          Start Your Technical Career with discounts up to 60% <br /> Offer Ends February 2025🔥
        </p>
      </div>

      {/* Navigation */}
      {/* <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold">
                GROWSKILL
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/courses" className="text-gray-600 hover:text-gray-900">
                Our Course
              </Link>
              <Link href="/features" className="text-gray-600 hover:text-gray-900">
                Features
              </Link>
              <Link href="/resources" className="text-gray-600 hover:text-gray-900">
                Resources
              </Link>
              <Link href="/company" className="text-gray-600 hover:text-gray-900">
                Company
              </Link>
            </div>
            <Button className="bg-[#1C1B1F] text-white rounded-full">
              Contact us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-wrap text-clip leading-tight">
              Master Programming and AI: Build <br />the Future Today
            </h1>
            <p className="text-gray-600 text-lg">
              Our expert-led programming and AI courses empower you to develop cutting-edge technical skills and launch your career in technology with guidance from industry professionals.
            </p>
            <div className="flex gap-4">
              <Button size="lg">Join Today</Button>
              <Button size="lg" variant="outline" className="gap-2">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-black">
              <Image
                src="/hero.jpg"
                alt="Course preview"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-600 rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-600 rounded-full" />
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/people/David.jpg"
                  alt="Instructor"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-white p-4 rounded-xl">
                <h3 className="font-semibold">Mrs Malatsi</h3>
                <p className="text-sm text-gray-300">Lecturer</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-[#1C1B1F] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-black/30 rounded-2xl p-4 space-y-4">
                <div className="aspect-video rounded-xl overflow-hidden bg-gray-400">
                  <Image
                    src="/THUMBNAILS/ai-pic.jpg"
                    alt="Course thumbnail"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex gap-2 mb-2">
                    <span className="px-2 py-1 bg-pink-500 rounded-full text-xs">Girls</span>
                    <span className="px-2 py-1 bg-purple-500 rounded-full text-xs">Photo</span>
                  </div>
                  <h3 className="font-semibold mb-2">AI Systems</h3>
                  <div className="flex items-center gap-2">
                    {/* <div className="w-8 h-8 rounded-full bg-gray-700" /> */}
                    <Image src={'/avatars/1.png'} width={30} height={30}  alt="Lecturer"/>
                    <span className="text-sm">Jenny Keland</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-[#1C1B1F] pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-white text-4xl mb-5">Learn in demand skills required at:</h1>
          <div className="flex w-full gap-8 items-center justify-center">
            {['Meta', 'OpenAI', 'Uber', 'Google', 'FNB'].map((partner) => (
              <div key={partner} className="text-white/50 hover:text-white hover:text-2xl transition ease-in-out font-semibold text-xl">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  )
}

