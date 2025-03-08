import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import Loading from "./Loading"

export default function TrendingNews({ news, loading }) {
  if (loading) return <Loading />

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Trending News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news && news.length > 0 ? (
            news.map((article, index) => (
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
            ))
          ) : (
            <div className="col-span-full text-center py-8">No trending news available at the moment.</div>
          )}
        </div>
      </div>
    </section>
  )
}

