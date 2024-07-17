'use client'

import Link from "next/link"

export const Footer = () => {
    return(
        <footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto flex flex-wrap justify-between">
    <div className="footer-section w-full md:w-1/3 px-4">
      Quick links:

      <div>
        <Link href={"/projects"}>
        Projects
        </Link>
      </div>
    </div>
    <div className="footer-section w-full md:w-1/3 px-4">
       Socials:

       <div className="flex-auto">
        <div>
        <a href="https://x.com/PARAG_GHATAGE">X</a>
        </div>

        <div>
        <a href="https://www.linkedin.com/in/parag-ghatage-09685a314/">LinkedIn</a>
        </div>

        <div>
        <a href="https://www.showwcase.com/phghatage1237">Showcase</a>
        </div>

        <div>
        <a href="https://www.instagram.com/parag_ghatage_35/">Instagram</a>
        </div>

        <div>
        <a href="https://github.com/ParagGhatage">Github</a>
        </div>

        </div>
    </div>
    
  </div>
</footer>
    )
}