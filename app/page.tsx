import { buttonVariants } from "@/components/ui/button";
// import { RainbowButton } from "@/components/ui/rainbow-btn";
import { page_routes } from "@/lib/routes-config";
import { MoveRight, MoveUpRightIcon } from "lucide-react";
import Link from "next/link";
import { AnimatedGridPattern } from "@/components/animated-grid";
import { ProblemsFolderButton } from "@/components/ProblemsFolderButton";
// import NoOverscroll from "@/components/NoOverscroll";
// import { StartLearningButton } from "@/components/StartLearningButton";

export default function Home() {
  return (
    <div className="relative">
      {/* <NoOverscroll /> */}
      <div className="hero-section relative flex sm:min-h-[92vh] min-h-[85vh] flex-col items-center justify-center text-center px-2 py-8">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className="absolute inset-0 -z-10 hidden sm:block [mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
        />
        <Link
          href="https://github.com/m3hu1/algorithmik"
          target="_blank"
          className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-2 sm:-mt-12"
        >
          Support me by starring the repository{" "}
          <MoveUpRightIcon
            className="w-4 h-4 font-extrabold"
            style={{ transform: "translateY(2px)" }}
          />
        </Link>
        <h1 className="text-3xl font-bold mb-4 sm:text-6xl pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-transparent dark:from-white dark:to-slate-900/10 pb-2">
          <span className="block sm:hidden">
            Learn Data Structures & Algorithms
          </span>
          <span className="hidden sm:block">
            Master Data Structures & Algorithms
          </span>
        </h1>
        {/* <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
          A comprehensive guide to mastering data structures and algorithms. It
          covers a wide range of topics, from the basics to advanced concepts.
        </p> */}
        <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
          A comprehensive guide to mastering data structures and algorithms.
          Explore notes on important DSA topics and tackle a variety of problem
          sets.
        </p>
        <div className="flex flex-row items-center gap-5">
          <Link
            href={`/guide${page_routes[0].href}`}
            className={buttonVariants({
              variant: "expandIcon",
              className: "px-6",
              size: "lg",
            })}
          >
            Start Learning
            <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
              <MoveRight className="h-4 w-4" />
            </div>
          </Link>
          {/* <StartLearningButton href={`/guide${page_routes[0].href}`} /> */}
          {/* <Link
            href="/guide/problem-sets/"
            className={buttonVariants({
              variant: "problems",
              className: "px-6",
              size: "lg",
            })}
          >
            Problems Folder
          </Link> */}
          <ProblemsFolderButton />
          {/* <Link
          href="/blog"
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          Read Blog
        </Link> */}
        </div>
      </div>
    </div>
  );
}
