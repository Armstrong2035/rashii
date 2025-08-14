import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://firebasestorage.googleapis.com/v0/b/website-directory-959bd.firebasestorage.app/o/rashii-images%2FBG.png?alt=media&token=2dfbf7f1-b69d-4377-bd42-238f12ffb9eb')`,
      }}
    >
      <div className="text-center text-white max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
          Connect, List,
          <br />
          and Discover Your
          <br />
          Next Dubai Opportunity
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            variant="outline"
            className="bg-[#FAE1DF] border-white/30 text-primary-rashii-green hover:bg-white/30 rounded-full px-8 py-3"
          >
            Log In
          </Button>
          <Button className="bg-[#2DEA6A] hover:bg-[#4a9863] text-white rounded-full px-8 py-3">Get Started</Button>
        </div>

        <div className="bg-white rounded-lg p-6 max-w-4xl mx-auto shadow-lg">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button className="px-6 py-2 bg-white text-primary-rashii-green rounded-md font-medium shadow-sm">Buy</button>
              <button className="px-6 py-2 font-medium text-primary-rashii-green">Rent</button>
            </div>

            <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3 flex-1 min-w-0">
              <MapPin className="w-5 h-5 text-gray-400 mr-3" />
              <Input
                placeholder="Enter location"
                className="border-none bg-transparent text-gray-700 placeholder-gray-500 focus:ring-0"
              />
            </div>

            <Select>
              <SelectTrigger className="w-full lg:w-48 bg-gray-50 border-none text-primary-rashii-green">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="bungalow">Bungalow</SelectItem>
              </SelectContent>
            </Select>

            <Input
              placeholder="Price AED"
              className="w-full lg:w-32 bg-gray-50 border-none placeholder-primary-rashii-green text-primary-rashii-green"
            />

            <Button className="bg-[#57AE73] hover:bg-[#4a9863] text-white px-8 py-3 rounded-lg w-full lg:w-auto">
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
