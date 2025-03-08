"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold" style={{ color: "#c71585" }}>INSIGHTSTREAM</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/category/business" className="px-3 py-2 rounded-md hover:bg-gray-100 font-bold" style={{ color: "#000000" }}>
              BUSINESS
            </Link>
            <Link href="/category/technology" className="px-3 py-2 rounded-md hover:bg-gray-100 font-bold" style={{ color: "#000000" }}>
              TECHNOLOGY
            </Link>
            <Link href="/category/health" className="px-3 py-2 rounded-md hover:bg-gray-100 font-bold" style={{ color: "#000000" }}>
              HEALTH
            </Link>
            <Link href="/category/science" className="px-3 py-2 rounded-md hover:bg-gray-100 font-bold" style={{ color: "#000000" }}>
              SCIENCE
            </Link>
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search news..."
                className="pl-3 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold"
                style={{ color: "#000000" }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-2 top-2.5 text-gray-500">
                <Search size={18} />
              </button>
            </form>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/category/business"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 font-bold"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: "#000000" }}
            >
              Business
            </Link>
            <Link
              href="/category/technology"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 font-bold"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: "#000000" }}
            >
              Technology
            </Link>
            <Link
              href="/category/health"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 font-bold"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: "#000000" }}
            >
              Health
            </Link>
            <Link
              href="/category/science"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 font-bold"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: "#000000" }}
            >
              Science
            </Link>
            <form onSubmit={handleSearch} className="relative mt-3">
              <input
                type="text"
                placeholder="Search news..."
                className="w-full pl-3 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold"
                style={{ color: "#000000" }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-2 top-2.5 text-gray-500">
                <Search size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  )
}
