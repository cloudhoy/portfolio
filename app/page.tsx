import Experience from "@/components/Experience";
import FadeInView from "@/components/FadeInView";
import GroupedCardList from "@/components/GroupedCardList";
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
              <h1 className="font-black text-amped text-5xl md:text-7xl font-sans-display uppercase leading-tight mb-4">
                Tony Cheong
              </h1>
            </TitleAnimated>
            <FadeInView>
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
      <section
        id="about"
        className="full-width bg-neutral -scroll-mt-5 md:scroll-mt-0"
      >
        <div className="p-4 md:p-8 *:leading-loose">
          <StickySectionHeader>
            <h2 className="text-base uppercase font-bold tracking-wider">
              About
            </h2>
          </StickySectionHeader>
          <p className="mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            ducimus repudiandae libero. Quam illo libero animi dolorum quos
            sequi. Omnis voluptatibus earum iusto animi incidunt impedit
            corrupti tempora necessitatibus sequi?
          </p>
          <p className="mb-4">
            Qui, voluptate nemo iste facilis temporibus consequatur illo, modi
            incidunt fuga commodi, architecto fugit voluptas laudantium natus
            officiis atque quasi mollitia deserunt quo itaque tempora.
            Distinctio in doloremque saepe et!
          </p>
          <p className="mb-4">
            Recusandae consequatur doloremque necessitatibus impedit vel eos
            molestiae repellat illo officiis sit. Deleniti ut ipsum deserunt
            molestiae eum consequatur velit, dignissimos quo minima, tenetur
            dolor quos quae illo porro dolore.
          </p>
          <p className="mb-4">
            Inventore, et non culpa mollitia tempora quas! Itaque, repellat,
            quibusdam atque incidunt omnis fugiat expedita libero temporibus
            eveniet ea praesentium fugit unde in veniam hic necessitatibus
            obcaecati adipisci quam! Corrupti!
          </p>
          <p className="mb-4">
            Aliquam at, animi quis voluptatibus sit a excepturi unde modi culpa
            eveniet quod quisquam ad, quia ipsa ipsum accusantium eligendi velit
            dolorem, accusamus minima tempore libero? Sit quaerat obcaecati
            itaque.
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
          <GroupedCardList />

          {/* <Experience
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
          </Experience> */}
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            ducimus repudiandae libero. Quam illo libero animi dolorum quos
            sequi. Omnis voluptatibus earum iusto animi incidunt impedit
            corrupti tempora necessitatibus sequi?
          </p>
          <p className="mb-4">
            Qui, voluptate nemo iste facilis temporibus consequatur illo, modi
            incidunt fuga commodi, architecto fugit voluptas laudantium natus
            officiis atque quasi mollitia deserunt quo itaque tempora.
            Distinctio in doloremque saepe et!
          </p>
          <p className="mb-4">
            Recusandae consequatur doloremque necessitatibus impedit vel eos
            molestiae repellat illo officiis sit. Deleniti ut ipsum deserunt
            molestiae eum consequatur velit, dignissimos quo minima, tenetur
            dolor quos quae illo porro dolore.
          </p>
          <p className="mb-4">
            Inventore, et non culpa mollitia tempora quas! Itaque, repellat,
            quibusdam atque incidunt omnis fugiat expedita libero temporibus
            eveniet ea praesentium fugit unde in veniam hic necessitatibus
            obcaecati adipisci quam! Corrupti!
          </p>
          <p className="mb-4">
            Aliquam at, animi quis voluptatibus sit a excepturi unde modi culpa
            eveniet quod quisquam ad, quia ipsa ipsum accusantium eligendi velit
            dolorem, accusamus minima tempore libero? Sit quaerat obcaecati
            itaque.
          </p>
        </div>
      </section>
    </Layout>
  );
}
