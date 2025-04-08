"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "AI Agent Development", href: "/services/ai-agent-development" },
        { name: "Customized Industry Solutions", href: "/services/customized-industry-solutions" },
        { name: "AI Consultancy", href: "/services/ai-consultancy" },
        { name: "Incubation Program", href: "/services/incubation-program" },
      ],
    },
    {
      name: "Products",
      href: "/products",
      dropdown: [
        { name: "Fabricxai", href: "/products/fabricxai" },
        { name: "Internal Communication App", href: "/products/internal-business-app" },
        { name: "AI Chatbot BB", href: "/products/ai-chatbot-bb" },
        { name: "NewsWise", href: "/products/newswise" },
        { name: "AinGyan", href: "/products/aingyan" },
      ],
    },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-md dark:bg-neutral-darkgrey/90" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="flex items-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SocioFi%20%28without%20name%29-01_copy-EdQIOshTsBxWnFI9xvGkKRbuAKiTCv.png"
                  alt="SocioFi Technology Logo"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold" style={{ fontFamily: "'Abril Fatface', cursive" }}>
                    SocioFi
                  </span>
                  <span className="text-sm text-primary-keppel">Technology</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                        pathname.startsWith(link.href)
                          ? "text-primary-keppel"
                          : "text-foreground hover:text-primary-keppel",
                      )}
                    >
                      {link.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {link.dropdown.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link href={item.href} className="w-full cursor-pointer">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md",
                    pathname === link.href ? "text-primary-keppel" : "text-foreground hover:text-primary-keppel",
                  )}
                >
                  {link.name}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <Button className="bg-primary-keppel hover:bg-primary-keppel/90 text-white">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-darkgrey shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="py-2">
                  <div className="px-3 py-2 text-base font-medium text-primary-keppel">{link.name}</div>
                  <div className="pl-6 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary-keppel"
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "block px-3 py-2 text-base font-medium rounded-md",
                    pathname === link.href ? "text-primary-keppel" : "text-foreground hover:text-primary-keppel",
                  )}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ),
            )}
            <div className="pt-4 flex items-center justify-between">
              <ThemeToggle />
              <Button className="w-full ml-2 bg-primary-keppel hover:bg-primary-keppel/90 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

