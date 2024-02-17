import BubbleUpCubesBackground from "@/components/BubbleUpCubesBackground";
import FadeInView from "@/components/FadeInView";
import ExperienceList from "@/components/ExperienceList";
import Layout from "@/components/Layout";
import StickySectionHeader from "@/components/StickySectionHeader";
import TitleAnimated from "@/components/TitleAnimated";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  ChevronDown,
  CornerRightDown,
  GitHub,
  Linkedin,
  Mail,
  Smile,
} from "react-feather";
import config from "./config";
import ProjectList from "@/components/ProjectList";

export default function Page() {
  return (
    <Layout>
      <section id="home" className="full-width min-h-svh bg-vignette">
        <BubbleUpCubesBackground />
        <div className="w-full h-full md:px-4 grid place-items-center text-center">
          <div className="w-full">
            <TitleAnimated>
              <FadeInView>
                <h1 className="font-black text-amped text-5xl md:text-7xl font-sans-display uppercase leading-tight mb-4">
                  Tony Cheong
                </h1>
              </FadeInView>
            </TitleAnimated>
            <FadeInView delay={500}>
              <div className="text-lg uppercase md:text-xl tracking-wide font-light">
                Software Engineer, Full Stack
              </div>
            </FadeInView>
          </div>
          <div className="absolute bottom-4">
            <a href="#about">
              <ChevronDown className="animate-bounce w-8 h-8" />
            </a>
          </div>
        </div>
      </section>
      <section id="about" className="full-width bg-neutral pt-8">
        <div className="p-4 md:p-8 *:leading-loose">
          <StickySectionHeader>
            <h2 className="text-base text-amped uppercase font-bold tracking-wider">
              About
            </h2>
          </StickySectionHeader>
          <FadeInView delay={300}>
            <p className="mb-4">
              My drive to create meaningful solutions and fascination with
              technology fueled my journey into the world of software
              engineering.
            </p>
            <p className="mb-4">
              Over the course of my career, I&apos;ve honed my skills in both
              front-end and back-end development, mastering various of
              technologies and frameworks such as C#, .NET framework, Next.js,
              React, and Typescript, to name a few.
            </p>
            <p className="mb-4">
              I thrive in environments where collaboration and creativity are
              encouraged, and I&apos;ve had the pleasure of working alongside
              talented teams to deliver a variety of high-quality software
              solutions, ranging from simple websites to large-scale enterprise
              solutions.
            </p>
            <p className="">
              All in all I&apos;m a simple guy that likes to work hard, create
              impact, drive results, and vibe with the team!
            </p>
          </FadeInView>
        </div>
      </section>
      <section id="work" className="full-width bg-neutral pt-8">
        <div className="p-4 md:p-8 *:leading-loose">
          <StickySectionHeader>
            <h2 className="text-base text-amped uppercase font-bold tracking-wider">
              Work
            </h2>
          </StickySectionHeader>
          <ExperienceList className="mb-8" />
          <a
            href="/resume_tony_cheong.pdf"
            target="_blank"
            className="link-hover text-amped font-medium group"
          >
            See my full resume
            <ArrowUpRight className="inline w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </section>
      {/* <section id="values" className="full-width bg-neutral pt-8">
        <div className="p-4 md:p-8 *:leading-loose">
          <StickySectionHeader>
            <h2 className="text-base text-amped uppercase font-bold tracking-wider">
              Values
            </h2>
          </StickySectionHeader>
          <ul className="grid md:grid-flow-col gap-8 mt-8">
            <li>
              <FadeInView>
                <div className="flex flex-col items-center p-4">
                  <BookOpen className="text-amped w-8 h-8 mb-4 stroke-info" />
                  <h3 className="text-amped mb-2 font-medium text-center">
                    Continuous Improvement
                  </h3>
                  <p className="text-sm text-center">
                    I prioritize staying up-to-date with the latest technologies
                    and best practices, and am eager to expand my knowledge and
                    skill set.
                  </p>
                </div>
              </FadeInView>
            </li>
            <li>
              <FadeInView delay={300}>
                <div className="flex flex-col items-center p-4">
                  <Award className="text-amped w-8 h-8 mb-4 stroke-warning" />
                  <h3 className="text-amped mb-2 font-medium text-center">
                    Integrity
                  </h3>
                  <p className="text-sm text-center">
                    I strive to inspire trust by being ethically unyielding and
                    honest, and taking responsibility for my actions.
                  </p>
                </div>
              </FadeInView>
            </li>
            <li>
              <FadeInView delay={600}>
                <div className="flex flex-col items-center p-4">
                  <Smile className="text-amped w-8 h-8 mb-4 stroke-success" />
                  <h3 className="text-amped mb-2 font-medium text-center">
                    Passion
                  </h3>
                  <p className="text-sm text-center">
                    I&apos;m committed, passionate, and aim to exceed
                    expectations and go above and beyond in all things.
                  </p>
                </div>
              </FadeInView>
            </li>
          </ul>
        </div>
      </section> */}
      <section id="projects" className="full-width bg-neutral pt-8">
        <div className="p-4 md:p-8 *:leading-loose">
          <StickySectionHeader>
            <h2 className="text-base text-amped uppercase font-bold tracking-wider">
              Projects
            </h2>
          </StickySectionHeader>
          <ProjectList />
        </div>
      </section>
      <section id="contact" className="full-width bg-neutral py-16">
        <div className="p-4 md:p-8 *:leading-loose">
          <h2 className="text-base text-amped uppercase font-bold tracking-wider mb-4">
            Contact
          </h2>
          <FadeInView rootMargin="-20% 0%">
            <div className="card bg-base-100 from-base-200 outline-base-content/5 relative overflow-hidden bg-gradient-to-b shadow-lg outline -outline-offset-1 sm:flex-row-reverse">
              <figure className="max-sm:bg-info/10 isolate shrink-0 sm:w-3/5 max-h-[230px] !hidden sm:!flex">
                <img
                  className="pointer-events-none object-cover"
                  alt="tony cheong's profile picture"
                  src="/avatar_wide_nobg_2.png"
                />
              </figure>
              <div className="bg-accent pointer-events-none absolute bottom-[-50%] -left-1/5 aspect-square w-3/4 -translate-x-1/2 rounded-full opacity-20 blur-3xl"></div>
              <div className="bg-info pointer-events-none absolute bottom-[-120%] left-1/2 aspect-square w-full -translate-x-1/2 rounded-full opacity-20 blur-3xl"></div>
              <div className="bg-base-100 pointer-events-none absolute -top-3/4 right-1/4 z-[3] aspect-square w-1/2 rounded-full opacity-60 blur-3xl"></div>
              <div className="card-body relative isolate z-[3] sm:w-2/5">
                <div className="card-title text-base-content text-xl font-bold contrast-200 [text-wrap:balance] sm:w-[200%] md:text-2xl mb-4">
                  Get in touch
                </div>
                <div className="grow text-lg leading-snug font-light sm:[text-wrap:balance] sm:w-[200%] mb-4">
                  I am open to work and new opportunities. Let&apos;s work
                  together!
                </div>
                <address>
                  <ul className="flex justify-around sm:justify-start gap-8">
                    <li>
                      <a
                        href={config.author.linkedin}
                        target="_blank"
                        className="btn btn-square btn-ghost text-amped"
                      >
                        <Linkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href={config.author.github}
                        target="_blank"
                        className="btn btn-square btn-ghost text-amped"
                      >
                        <GitHub />
                      </a>
                    </li>
                    <li>
                      <a
                        href={config.author.mailto}
                        target="_blank"
                        className="btn btn-square btn-ghost text-amped"
                      >
                        <Mail />
                      </a>
                    </li>
                  </ul>
                </address>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </Layout>
  );
}
