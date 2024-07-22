import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "firebase",
  "vercel",
  "testinglibrary",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
 "nextjs",
  "figma",
];

export function IconCloud1() {
  return (
    <div className=" h-full w-full items-center pt-25 mt-35 justify-center  rounded-lg  bg-background  ">
        <div className="text-center text-4xl font-bold">
           Skills
        </div>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
