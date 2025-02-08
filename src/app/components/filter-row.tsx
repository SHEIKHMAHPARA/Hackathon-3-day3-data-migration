"use client"

import { Button } from "../../components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Grid2X2, List } from "lucide-react"

export default function FilterRow() {
  return (
    <div className="flex items-center left-10 justify-between px-8 py-6 pb-50 w-full max-h-98">
      <div className="text-[#666666] text-sm">Showing all 12 results</div>

      <div className="flex items-center gap-2">
        <span className="text-[#666666] text-sm">Views:</span>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Grid2X2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Select defaultValue="popularity">
          <SelectTrigger className="w-[180px] h-9 text-sm">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popularity">Popularity</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
        <Button className="h-9 px-8 bg-[#29B6F6] hover:bg-[#29B6F6]/90 text-sm font-medium">Filter</Button>
      </div>
    </div>
  )
}

