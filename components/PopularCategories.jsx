import Link from "next/link"
import { Briefcase, Cpu, Heart, FlaskRoundIcon as Flask, Landmark, Gamepad2, Film, Plane } from "lucide-react"

const categories = [
  { name: "Business", icon: <Briefcase size={24} />, slug: "business" },
  { name: "Technology", icon: <Cpu size={24} />, slug: "technology" },
  { name: "Health", icon: <Heart size={24} />, slug: "health" },
  { name: "Science", icon: <Flask size={24} />, slug: "science" },
  { name: "Politics", icon: <Landmark size={24} />, slug: "politics" },
  { name: "Entertainment", icon: <Film size={24} />, slug: "entertainment" },
  { name: "Sports", icon: <Gamepad2 size={24} />, slug: "sports" },
  { name: "Travel", icon: <Plane size={24} />, slug: "travel" },
]

export default function PopularCategories() {
  return (
    <section style={{ padding: "3rem 0", backgroundColor: "white" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <h2 style={{ fontSize: "1.875rem", fontWeight: "bold", textAlign: "center", marginBottom: "2.5rem", color: "black" }}>
          Popular Categories
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
            "@media (min-width: 768px)": {
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.5rem",
            },
          }}
        >
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "1.5rem",
                backgroundColor: "white", // Restored to previous color
                borderRadius: "0.5rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#e5e7eb";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f9fafb";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ color: "black", marginBottom: "0.75rem" }}>{category.icon}</div>
              <span style={{ fontWeight: "500", color: "black" }}>{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
