import Experience from "@/components/Experience";
import FadeInView from "@/components/FadeInView";
import GroupedCardList from "@/components/GroupedCardList";
import Layout from "@/components/Layout";
import StickySectionHeader from "@/components/StickySectionHeader";
import TitleAnimated from "@/components/TitleAnimated";
import { ChevronDown, GitHub, Linkedin, Mail } from "react-feather";

export default function Page() {
  return (
    <Layout>
      <section id="home" className="full-width min-h-svh">
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
              <div className="text-lg uppercase md:text-xl tracking-wide">
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
            <p className="mb-4">I started my journey</p>
            <p className="mb-4">
              Qui, voluptate nemo iste facilis temporibus consequatur illo, modi
              incidunt fuga commodi, architecto fugit voluptas laudantium natus
              officiis atque quasi mollitia deserunt quo itaque tempora.
              Distinctio in doloremque saepe et!
            </p>
            <p>
              Recusandae consequatur doloremque necessitatibus impedit vel eos
              molestiae repellat illo officiis sit. Deleniti ut ipsum deserunt
              molestiae eum consequatur velit, dignissimos quo minima, tenetur
              dolor quos quae illo porro dolore.
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
      <section id="projects" className="full-width bg-neutral pt-8">
        <div className="p-4 md:p-8 *:leading-loose">
          <StickySectionHeader>
            <h2 className="text-base text-amped uppercase font-bold tracking-wider">
              Projects
            </h2>
          </StickySectionHeader>
        </div>
      </section>
      <section id="contact" className="full-width bg-neutral py-8">
        <div className="p-4 md:p-8 *:leading-loose">
          <StickySectionHeader>
            <h2 className="text-base text-amped uppercase font-bold tracking-wider">
              Contact
            </h2>
          </StickySectionHeader>
          <p className="mb-8">Let&apos;s work together. Get in touch 👇</p>
          <FadeInView
            delay={300}
            className="flex flex-col md:flex-row md:min-h-24 items-center gap-4"
          >
            <address>
              <ul className="flex justify-around sm:justify-start gap-8">
                <li>
                  <a
                    href="https://www.linkedin.com/in/tcheong/"
                    target="_blank"
                    className="btn btn-square btn-ghost"
                  >
                    <Linkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/cloudhoy"
                    target="_blank"
                    className="btn btn-square btn-ghost"
                  >
                    <GitHub />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:wanhoy.cheong@gmail.com"
                    target="_blank"
                    className="btn btn-square btn-ghost"
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
                className="btn btn-outline"
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
