import { Search } from "lucide-react"

export default function SearchHeader({ query, resultsCount }) {
  return (
    <div className="py-8">
      <div className="flex items-center justify-center mb-4">
        <Search size={24} className="text-blue-600 mr-2" />
        <h1 className="text-3xl font-bold">Search Results</h1>
      </div>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Found {resultsCount} results for "{query}"
      </p>
    </div>
  )
}

