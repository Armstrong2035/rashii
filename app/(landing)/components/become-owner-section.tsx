import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function BecomeOwnerSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="/placeholder.svg?height=500&width=600"
              alt="Hands holding house keys"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          <div className="lg:w-1/2 lg:pl-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Become House
              <br />
              Owner At Ease
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Explore homes from the comfort of your couch. Our platform offers high-quality virtual tours, real-time
              assistance, and smart filters—making home buying simple, transparent, and stress-free.
            </p>
            <Button className="bg-[#57AE73] hover:bg-[#4a9863] text-white rounded-full px-8 py-3 flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
