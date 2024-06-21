"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandX,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandLinkedin
} from "@tabler/icons-react";
import axios from "axios"
import toast from "react-hot-toast";

export function ContactMe() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const [user, setUser] = React.useState({
    email: "",
    message: "",
    name: "",
})
    const onEmail = async () => {
      try {

          const response = await axios.post("/api/Contact-me", user);
          console.log( response.data);

          
          
      } catch (error:any) {
          console.log("Signup failed", error.message);
          
      }
    }

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input overflow-auto bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 pt-3">
        Nice to meet you
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Send me an email right from here
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" placeholder="Your Name" type="text"
            value={user.name} 
            onChange={(e) => setUser({...user, name: e.target.value})}/>
          </LabelInputContainer>
          
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="Email id" type="email"
          value={user.email} 
          onChange={(e) => setUser({...user, email: e.target.value})}/>
        </LabelInputContainer>

        <LabelInputContainer className="h-56">
            <Label htmlFor="message">Message</Label>
            <Input id="message" placeholder="Your message..." type="text" className="h-40 md:max-w-xl px-4 py-2 whitespace-normal break-words resize-y"
            value={user.message}
            onChange={(e) => setUser({...user, message: e.target.value})}/>
          </LabelInputContainer>


        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          onClick={onEmail}
        >
          Send Email &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <div className="text-center m-4 text-2xl ">
            Socials
        </div>
        <div className="flex flex-col space-y-4">

          <div
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          > 
            <IconBrandGmail className="h-4  text-neutral-800 dark:text-neutral-300" /> 
            <span className="text-neutral-700 dark:text-neutral-300 text-sm text-center">
              Email : phghatage1@gmail.com
            </span>
            <BottomGradient />
          </div>

        <a href="https://github.com/ParagGhatage">
          <div
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          > 
            <IconBrandGithub className="h-4  text-neutral-800 dark:text-neutral-300" /> 
            <span className="text-neutral-700 dark:text-neutral-300 text-sm text-center">
              GitHub
            </span>
            <BottomGradient />
          </div>
          </a>

          <a href="https://x.com/PARAG_GHATAGE">
          <div
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          > 
            <IconBrandX className="h-4  text-neutral-800 dark:text-neutral-300" /> 
            <span className="text-neutral-700 dark:text-neutral-300 text-sm text-center">
              X
            </span>
            <BottomGradient />
          </div>
          </a>

          <a href="https://www.instagram.com/parag_ghatage_35/">
          <div
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          > 
            <IconBrandInstagram className="h-4  text-neutral-800 dark:text-neutral-300" /> 
            <span className="text-neutral-700 dark:text-neutral-300 text-sm text-center">
              Instagram
            </span>
            <BottomGradient />
          </div>
          </a>

          <a href="https://www.linkedin.com/in/parag-ghatage-7601b825a/">
          <div
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          > 
            <IconBrandLinkedin className="h-4  text-neutral-800 dark:text-neutral-300" /> 
            <span className="text-neutral-700 dark:text-neutral-300 text-sm text-center">
              LinkedIn
            </span>
            <BottomGradient />
          </div>
          </a>


        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
