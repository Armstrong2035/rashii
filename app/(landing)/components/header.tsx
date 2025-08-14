import { Button } from "@/components/ui/button"
import { ChevronDown, Plus } from "lucide-react"

export function Header() {
  return (
    <header className="top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-primary-rashii-green">RASHII</div>

        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-1 text-black cursor-pointer">
            <span>Home</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-1 text-black cursor-pointer">
            <span>Properties</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-1 text-black cursor-pointer">
            <span>Members</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <span className="text-black cursor-pointer">Contact</span>
        </nav>

        <Button className="bg-primary-rashii-green hover:bg-[#4a9863] text-black rounded-full px-6 py-2 flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Submit property</span>
        </Button>
      </div>
    </header>
  )
}
