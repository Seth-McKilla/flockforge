import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "flockforge",
  description: "Perfectly curated Twitter Lists based on your search criteria.",
  mainNav: [],
  links: {
    twitter: "https://twitter.com/sethmckilla",
    github: "https://github.com/Seth-McKilla/flockforge",
  },
}
