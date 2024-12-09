import { Header } from "@/components/header"
import { MobileMenu } from "@/components/mobile-menu"

export default function Navigation() {
  return (
    <div className="sticky flex w-full justify-around shadow-lg bg-white items-center top-0 left-0 right-0 z-50">
      <Header />
      <MobileMenu />
    </div>
  )
}