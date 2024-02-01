import Experience from "@/components/Experience";
import FadeInView from "@/components/FadeInView";
import GroupedCardList from "@/components/GroupedCardList";
import Layout from "@/components/Layout";
import StickySectionHeader from "@/components/StickySectionHeader";
import TitleAnimated from "@/components/TitleAnimated";
import {
  ArrowDown,
  Award,
  BookOpen,
  ChevronDown,
  CornerRightDown,
  GitHub,
  Linkedin,
  Mail,
  Smile,
} from "react-feather";

export default function Page() {
  return (
    <Layout>
      <section id="home" className="full-width min-h-svh bg-vignette">
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
                Software Engineer
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
              I am a seasoned software engineer with seven years of experience
              specializing in web application development. My drive to create
              meaningful solutions and fascination with technology fueled my
              journey into the world of software engineering.
            </p>
            <p className="mb-4">
              Over the course of my career, I&apos;ve honed my skills in both
              front-end and back-end development, mastering various of
              technologies and frameworks such as C#, .NET framework, Next.js,
              React, and Angular, to name a few.
            </p>
            <p className="">
              I thrive in environments where collaboration and creativity are
              encouraged, and I&apos;ve had the pleasure of working alongside
              talented teams to deliver a variety of high-quality software
              solutions, ranging from simple websites to large-scale enterprise
              solutions.
            </p>
          </FadeInView>
        </div>
      </section>
      <section id="experience" className="full-width bg-neutral pt-8">
        <div className="p-4 md:p-8 *:leading-loose">
          <StickySectionHeader>
            <h2 className="text-base text-amped uppercase font-bold tracking-wider">
              Experience
            </h2>
          </StickySectionHeader>
          <GroupedCardList />
        </div>
      </section>
      <section id="values" className="full-width bg-neutral pt-8">
        <div className="p-4 md:p-8 *:leading-loose">
          <StickySectionHeader>
            <h2 className="text-base text-amped uppercase font-bold tracking-wider">
              Values
            </h2>
          </StickySectionHeader>
          <ul className="grid md:grid-flow-col gap-8 mt-8">
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
              <div className="flex flex-col items-center p-4">
                <Smile className="text-amped w-8 h-8 mb-4 stroke-success" />
                <h3 className="text-amped mb-2 font-medium text-center">
                  Passion
                </h3>
                <p className="text-sm text-center">
                  I&apos;m committed, passionate, and always go above and
                  beyond, aiming to exceed expectations in all aspects.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section id="projects" className="full-width bg-neutral pt-8">
        <div className="p-4 md:p-8 *:leading-loose">
          <StickySectionHeader>
            <h2 className="text-base text-amped uppercase font-bold tracking-wider">
              Projects
            </h2>
          </StickySectionHeader>
          <ul>
            <li>Portfolio</li>
            <li>Ecommerce</li>
            <li>Verto.sh</li>
          </ul>
        </div>
      </section>
      <section id="contact" className="full-width bg-neutral py-16">
        <div className="p-4 md:p-8 *:leading-loose">
          <h2 className="text-base text-amped uppercase font-bold tracking-wider text-center">
            Contact
          </h2>
          <p className="mb-4 text-center">Get in touch. Let&apos;s work together!</p>
          <FadeInView
            delay={300}
            rootMargin="-10% 0%"
            className="flex flex-col md:flex-row items-center gap-4 justify-center"
          >
            <address>
              <ul className="flex justify-around sm:justify-start gap-8">
                <li>
                  <a
                    href="https://www.linkedin.com/in/tcheong/"
                    target="_blank"
                    className="btn btn-square btn-ghost text-amped"
                  >
                    <Linkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/cloudhoy"
                    target="_blank"
                    className="btn btn-square btn-ghost text-amped"
                  >
                    <GitHub />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:wanhoy.cheong@gmail.com"
                    target="_blank"
                    className="btn btn-square btn-ghost text-amped"
                  >
                    <Mail />
                  </a>
                </li>
              </ul>
            </address>
            <div className="divider divider-vertical md:divider-horizontal text-muted">
              or
            </div>
            <div>
              <a
                href="/resume_tony_cheong.pdf"
                download="tony cheong's resume"
                className="btn btn-primary"
              >
                Download Resume
              </a>
            </div>
          </FadeInView>
        </div>
      </section>
    </Layout>
  );
}
