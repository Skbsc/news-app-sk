import { Briefcase, Cpu, Heart, FlaskRoundIcon as Flask, Landmark, Gamepad2, Film, Plane } from "lucide-react"

const categoryIcons = {
  business: <Briefcase size={24} />,
  technology: <Cpu size={24} />,
  health: <Heart size={24} />,
  science: <Flask size={24} />,
  politics: <Landmark size={24} />,
  entertainment: <Film size={24} />,
  sports: <Gamepad2 size={24} />,
  travel: <Plane size={24} />,
}

export default function CategoryHeader({ category }) {
  const formattedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : ""
  const icon = categoryIcons[category] || null

  return (
    <div className="py-8">
      <div className="flex items-center justify-center mb-4">
        {icon && <div className="text-blue-600 mr-2">{icon}</div>}
        <h1 className="text-3xl font-bold">{formattedCategory} News</h1>
      </div>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Stay updated with the latest {formattedCategory.toLowerCase()} news from around the world. Discover breaking
        stories, in-depth analysis, and expert opinions.
      </p>
    </div>
  )
}

