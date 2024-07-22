'use client'

import Link from "next/link"
import { IconBrandGithub,IconBrandInstagram,IconBrandLinkedin,IconBrandX,IconBrandLeetcode,IconBrandGmail } from "@tabler/icons-react"

export const Footer = () => {
    return(
        <footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto flex flex-wrap justify-between">
    <div className="footer-section w-full  md:w-1/3 px-4">
    <div className="font-bold text-xl mb-2">
    Quick links:
    </div>
     

      <div>
        <Link href={"/projects"}>
        Projects
        </Link>
      </div>
    </div>
    <div className="footer-section  w-full md:w-1/3 px-4 mt-3 sm:mt-0">
    <div className="font-bold text-xl">
    Socials:

    </div>
       
       <div className="flex justify-evenly mt-2">
       <div>
        <Link href="mailto:thunderwolf.dev@gmail.com">
        <IconBrandGmail/>
        </Link>
        </div>

        <div>
        <Link href="https://x.com/PARAG_GHATAGE">
        <IconBrandX/>
        </Link>
        </div>
        <div>
        <Link href="https://leetcode.com/u/phghatage1/">
        <IconBrandLeetcode/>
        </Link>
        </div>

        <div>
        <Link href="https://github.com/ParagGhatage">
        <IconBrandGithub/>
        </Link>
        </div>

        <div>
        <Link href="https://www.linkedin.com/in/parag-ghatage-09685a314/">
        <IconBrandLinkedin/>
        </Link>
        </div>

        <div>
        <Link href="https://www.instagram.com/parag_ghatage_35/">
        <IconBrandInstagram/>
        </Link>
        </div>

        

        </div>
    </div>
    
  </div>
</footer>
    )
}