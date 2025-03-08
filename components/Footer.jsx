import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">InsightNews</h3>
            <p className="mb-4">
              A revolutionary web application designed to redefine how people discover and consume news.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-600">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-600">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-600">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-600">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-600">
                <Github size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/category/business" className="hover:text-blue-600">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/category/technology" className="hover:text-blue-600">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/category/health" className="hover:text-blue-600">
                  Health
                </Link>
              </li>
              <li>
                <Link href="/category/science" className="hover:text-blue-600">
                  Science
                </Link>
              </li>
              <li>
                <Link href="/category/entertainment" className="hover:text-blue-600">
                  Entertainment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <address className="not-italic">
              <p>123 News Street</p>
              <p>Media City, MS 12345</p>
              <p>United States</p>
              <p className="mt-2">Email: info@insightstream.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} InsightStream. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
