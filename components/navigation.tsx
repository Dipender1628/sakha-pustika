"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

const navigationItems = [
  { id: "home", label: "मुख्य पृष्ठ" },
  { id: "vivekananda", label: "स्वामी विवेकानंद" },
  { id: "subhashita", label: "सुभाषित" },
  { id: "amrit-vachan", label: "अमृत वचन" },
  { id: "geet", label: "गीत" },
  { id: "prerak-prasang", label: "प्रेरक प्रसंग" },
  { id: "charcha", label: "चर्चा" },
  { id: "panch-parivartan", label: "पंच परिवर्तन" },
]

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-orange-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => onSectionChange("home")}>
            <h1 className="text-xl font-bold">शाखा पुस्तिका</h1>
            <p className="text-sm text-orange-100">दिसम्बर 2025- feb 2026</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "secondary" : "ghost"}
                  className={`text-white hover:bg-orange-700 ${activeSection === item.id ? "bg-orange-800" : ""}`}
                  onClick={() => onSectionChange(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-orange-700"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-orange-700">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "secondary" : "ghost"}
                  className={`w-full text-left justify-start text-white hover:bg-orange-800 ${
                    activeSection === item.id ? "bg-orange-800" : ""
                  }`}
                  onClick={() => {
                    onSectionChange(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
