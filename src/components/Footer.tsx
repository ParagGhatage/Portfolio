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
        <a href="">X</a>
        </div>

        <div>
        <a href="">LinkedIn</a>
        </div>

        <div>
        <a href="">Showcase</a>
        </div>

        <div>
        <a href="">Instagram</a>
        </div>
        </div>
    </div>
    <div className="footer-section w-full md:w-1/3 px-4">
       Contact Me:

       <div>
        Email: phghatage1@gmail.com
       </div>
    </div>
  </div>
</footer>
    )
}