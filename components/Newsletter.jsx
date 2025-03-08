"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) {
      setError("Please enter your email address")
      return
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    console.log("Subscribing email:", email)
    setIsSubmitted(true)
    setError("")
    setEmail("")

    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <section className="py-16" style={{ backgroundColor: "#90EE90" }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated with InsightStream</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
          Subscribe to our newsletter and get the latest news delivered directly to your inbox.
        </p>

        {isSubmitted ? (
          <div className="bg-green-500 text-white p-4 rounded-lg max-w-md mx-auto">
            Thank you for subscribing! You'll receive our next newsletter soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-grow">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none h-12"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p className="text-red-300 text-sm mt-1 text-left">{error}</p>}
              </div>
              <button
                type="submit"
                className="text-black font-bold px-6 flex items-center justify-center border border-black h-12"
                style={{ backgroundColor: "#90EE90", borderRadius: "0.5rem" }}
              >
                Subscribe <Send size={16} className="ml-2" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
