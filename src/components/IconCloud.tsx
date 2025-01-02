import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "googlecloud",
  "microsoftazure",
  "tensorflow",
  "pytorch",
  "keras",
  "scikit-learn",
  "pandas",
  "numpy",
  "matplotlib",
  "plotly",
  "opencv",
  "kubernetes",
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
  "docker",
  "tailwindcss",
  "mongodb",
  "shadcn",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
 "nextjs",
  "figma",
  
];

export function IconCloud1() {
  return (
    <div className=" h-full w-full items-center pt-40 mt-35 justify-center  rounded-lg  bg-black  ">
        <div className="text-center text-4xl font-bold text-white">
           Skills
        </div>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
