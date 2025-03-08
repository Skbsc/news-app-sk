"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { fetchArticleById } from "@/utils/api"
import Loading from "@/components/Loading"

export default function ArticlePage() {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getArticle = async () => {
      setLoading(true)
      try {
        const data = await fetchArticleById(id)
        setArticle(data)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching article:", err)
        setError("Failed to load the article. Please try again later.")
        setLoading(false)
      }
    }

    if (id) {
      getArticle()
    }
  }, [id])

  if (loading) return <Loading />

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-500 text-center">{error}</p>
        <Link href="/" className="text-blue-500 hover:underline mt-4 inline-block">
          <ArrowLeft className="inline-block mr-2" size={16} />
          Back to Home
        </Link>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center">Article not found.</p>
        <Link href="/" className="text-blue-500 hover:underline mt-4 inline-block">
          <ArrowLeft className="inline-block mr-2" size={16} />
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
        <ArrowLeft className="inline-block mr-2" size={16} />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="mb-4 text-gray-600">
        <span className="mr-4">
          <User className="inline-block mr-1" size={16} />
          {article.author || "Unknown Author"}
        </span>
        <span>
          <Calendar className="inline-block mr-1" size={16} />
          {article.publishedAt
            ? `${formatDistanceToNow(new Date(article.publishedAt))} ago`
            : "Publication date unknown"}
        </span>
      </div>
      {article.urlToImage && (
        <div className="mb-6 relative h-64 md:h-96">
          <Image
            src={article.urlToImage || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <div className="prose max-w-none">
        <p className="text-xl mb-4">{article.description}</p>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
      {article.url && (
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Read full article on source website
        </a>
      )}
    </article>
  )
}

