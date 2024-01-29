import Experience from "@/components/Experience";
import FadeInView from "@/components/FadeInView";
import Layout from "@/components/Layout";
import StickySectionHeader from "@/components/StickySectionHeader";
import TitleAnimated from "@/components/TitleAnimated";
import { ChevronDown } from "react-feather";

export default function Page() {
  return (
    <Layout>
      <section id="home" className="full-width min-h-svh">
        <div className="w-full h-full md:px-4 grid place-items-center text-center">
          <div className="w-full">
            <TitleAnimated>
              <h1 className="font-black text-5xl md:text-7xl font-sans-display uppercase leading-tight mb-4">
                Tony Cheong
              </h1>
            </TitleAnimated>
            <FadeInView>
              <div className="text-xl md:text-2xl uppercase tracking-wide">
                Software Engineer
              </div>
            </FadeInView>
          </div>
          <div className="absolute bottom-4">
            <a href="#about">
              <ChevronDown className="animate-bounce" />
            </a>
          </div>
        </div>
      </section>
      <section id="about" className="full-width bg-neutral -scroll-mt-5 md:scroll-mt-0">
        <div className="p-4 md:p-8 *:leading-loose">
          <StickySectionHeader>
            <h2 className="text-base uppercase font-bold tracking-wider">
              About
            </h2>
          </StickySectionHeader>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            distinctio tenetur quas autem et. Dolorum a voluptatibus pariatur
            dolore nobis quidem consequatur blanditiis esse commodi ea,
            cupiditate saepe deserunt! Dignissimos?
          </p>
          <p className="mb-4">
            Dolore perferendis reiciendis eius quos vitae in nisi quisquam.
            Expedita consequuntur minus reiciendis quam alias vel, deleniti
            nobis, aspernatur, voluptatibus eligendi ducimus sunt aliquam quae
            blanditiis dolor. Autem, numquam nisi?
          </p>
          <p className="mb-4">
            Fuga ullam omnis odit labore quia quos. Dignissimos porro vitae vero
            quod quae, exercitationem veniam facilis ea impedit unde delectus?
            Libero dolores, officiis omnis soluta modi totam laudantium expedita
            voluptate?
          </p>
          <p className="mb-4">
            Eum voluptatum voluptas consequatur, facere quam minus, eveniet ad
            adipisci veniam commodi dolores nemo ipsum consequuntur mollitia
            explicabo porro maxime consectetur, voluptates saepe ipsam vel iste
            dolorem fugit? Soluta, deleniti!
          </p>
          <p className="mb-4">
            Expedita veritatis reiciendis cupiditate neque sequi unde quos ut
            architecto modi incidunt velit quia dolores tenetur quae omnis
            beatae, vel porro quod praesentium, sapiente perferendis
            voluptatibus. Perspiciatis eveniet maiores enim.
          </p>
        </div>
      </section>
      <section id="experience" className="full-width bg-neutral">
        <div className="p-4 md:p-8 *:leading-loose">
          <StickySectionHeader>
            <h2 className="text-base uppercase font-bold tracking-wider">
              Experience
            </h2>
          </StickySectionHeader>
          <Experience
            title="Software Engineer | Anacle Systems Ltd"
            imageSrc="/fusionopolis-one-exterior.jpg"
            imageAlt="exterior of high-rise office building from street level looking upwards"
          >
            <p>
              Designed solution with Enterprise Resource Planning (ERP) software
              for leading real estate companies.
            </p>
          </Experience>
          <Experience
            title="Full Stack Engineer | Alfacom Technologies M Sdn Bhd"
            imageSrc="/damansara-intan-business-park-exterior.jpg"
            imageAlt="exterior of high-rise office building from street level looking upwards"
          >
            <p>
              Designed solution with Enterprise Resource Planning (ERP) software
              for leading real estate companies.
            </p>
          </Experience>
        </div>
      </section>
      <section id="contact" className="full-width bg-neutral">
        <div className="p-4 md:p-8 *:leading-loose">
          <StickySectionHeader>
            <h2 className="text-base uppercase font-bold tracking-wider">
              Contact
            </h2>
          </StickySectionHeader>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            distinctio tenetur quas autem et. Dolorum a voluptatibus pariatur
            dolore nobis quidem consequatur blanditiis esse commodi ea,
            cupiditate saepe deserunt! Dignissimos?
          </p>
          <p className="mb-4">
            Dolore perferendis reiciendis eius quos vitae in nisi quisquam.
            Expedita consequuntur minus reiciendis quam alias vel, deleniti
            nobis, aspernatur, voluptatibus eligendi ducimus sunt aliquam quae
            blanditiis dolor. Autem, numquam nisi?
          </p>
          <p className="mb-4">
            Fuga ullam omnis odit labore quia quos. Dignissimos porro vitae vero
            quod quae, exercitationem veniam facilis ea impedit unde delectus?
            Libero dolores, officiis omnis soluta modi totam laudantium expedita
            voluptate?
          </p>
          <p className="mb-4">
            Eum voluptatum voluptas consequatur, facere quam minus, eveniet ad
            adipisci veniam commodi dolores nemo ipsum consequuntur mollitia
            explicabo porro maxime consectetur, voluptates saepe ipsam vel iste
            dolorem fugit? Soluta, deleniti!
          </p>
          <p className="mb-4">
            Expedita veritatis reiciendis cupiditate neque sequi unde quos ut
            architecto modi incidunt velit quia dolores tenetur quae omnis
            beatae, vel porro quod praesentium, sapiente perferendis
            voluptatibus. Perspiciatis eveniet maiores enim.
          </p>
        </div>
      </section>
    </Layout>
  );
}
