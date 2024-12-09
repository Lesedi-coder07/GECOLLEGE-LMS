import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-100 mt-[30rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">About</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Company</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Blog</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Help Center</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Connect</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Twitter</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Facebook</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">&copy; 2023 GE College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

