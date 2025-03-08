import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"

export default function NewsGrid({ news }) {
  if (!news || news.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-red-600 font-bold">No news articles found!</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
      {news.map((article, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48">
            <Image
              src={article.urlToImage || "/placeholder.svg?height=300&width=400"}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">
                {article.publishedAt ? `${formatDistanceToNow(new Date(article.publishedAt))} ago` : "Recent"}
              </span>
              <Link
                href={`/article/${article.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-blue-600 font-medium hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
