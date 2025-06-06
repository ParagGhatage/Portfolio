"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandLinkedin
} from "@tabler/icons-react";
import axios from "axios";
import { useToast } from '@chakra-ui/react';
import Link from "next/link";

export function ContactMe() {
  const toast = useToast();

  const [user, setUser] = React.useState({
    email: "",
    message: "",
    name: "",
  });

  // Check if any field is empty; if so, disable the send button.
  const isDisabled = !user.email || !user.message || !user.name;

  const onEmail = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/Contact-me", user);
      console.log(response.data);

      if (response) {
        toast({
          title: 'Email Sent.',
          description: "We have sent an email to Parag.",
          status: 'success',
          isClosable: true,
        });
      }
    } catch (error: any) {
      console.log("Unable to send email", error.message);
      toast({
        title: 'Unable to send email.',
        description: "Please try again.",
        status: 'error',
        isClosable: true,
      });
    }
  };

  return (
    <div className="w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input overflow-auto bg-white dark:bg-black">
      <h2 className="font-bold text-4xl text-neutral-800 dark:text-neutral-200 pt-3 text-center">
        Get in touch
      </h2>

      <form className="my-8 sm:flex justify-center" onSubmit={onEmail}>
        <div className="w-80">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="name">Your Name</Label>
              <Input 
                id="name" 
                placeholder="Your Name" 
                type="text"
                value={user.name} 
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email" 
              placeholder="Email id" 
              type="email"
              value={user.email} 
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </LabelInputContainer>

          <LabelInputContainer className="h-56">
            <Label htmlFor="message">Message</Label>
            <textarea 
              id="message" 
              placeholder="Your message..."  
              className="h-40 md:max-w-xl px-4 py-2 whitespace-normal text-white bg-zinc-800 break-words resize-y"
              value={user.message}
              onChange={(e) => setUser({ ...user, message: e.target.value })}
            />
          </LabelInputContainer>

          <button
            disabled={isDisabled}
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
          >
            Send &rarr;
            <BottomGradient />
          </button>
        </div>
        <div className="m-7 mt-0 w-60 sm:ml-20">
          <div className="flex flex-col space-y-4">
            <Link href="mailto:parag.dev2025@gmail.com?subject=Get%20in%20Touch&body=Hello%20there">
              <div className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
                <IconBrandGmail className="h-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm text-center">
                  Gmail
                </span>
                <BottomGradient />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/paragg1/">
              <div className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
                <IconBrandLinkedin className="h-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm text-center">
                  LinkedIn
                </span>
                <BottomGradient />
              </div>
            </Link>
            <Link href="https://github.com/ParagGhatage">
              <div className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
                <IconBrandGithub className="h-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm text-center">
                  GitHub
                </span>
                <BottomGradient />
              </div>
            </Link>
            <Link href="https://x.com/PARAG_GHATAGE">
              <div className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
                <IconBrandX className="h-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm text-center">
                  X
                </span>
                <BottomGradient />
              </div>
            </Link>
            <Link href="https://www.instagram.com/parag_ghatage_35/">
              <div className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
                <IconBrandInstagram className="h-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm text-center">
                  Instagram
                </span>
                <BottomGradient />
              </div>
            </Link>
          </div>
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
