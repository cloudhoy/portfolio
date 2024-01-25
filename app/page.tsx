import FadeInView from "@/components/FadeInView";
import Layout from "@/components/Layout";
import TitleAnimated from "@/components/TitleAnimated";

export default function Page() {
  return (
    <Layout>
      <section id="home" className="full-width min-h-svh">
        <div className="w-full h-full md:px-4 grid place-items-center text-center">
          <div className="w-full">
            <TitleAnimated>
              <h1 className="font-black text-6xl md:text-7xl font-sans-display uppercase leading-tight">
                Tony Cheong
              </h1>
            </TitleAnimated>
            <FadeInView>
              <div className="text-xl md:text-2xl uppercase tracking-wide">
                Software Engineer
              </div>
            </FadeInView>
          </div>
        </div>
      </section>
      <section id="about" className="full-width bg-base-100/70">
        <div className="p-4 md:p-8 bg-neutral rounded-box -mt-16 *:leading-loose">
          <h2 className="text-lg uppercase font-medium my-4">About</h2>
          <p className="mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            distinctio tenetur quas autem et. Dolorum a voluptatibus pariatur
            dolore nobis quidem consequatur blanditiis esse commodi ea,
            cupiditate saepe deserunt! Dignissimos?
          </p>
          <p className="mb-8">
            Dolore perferendis reiciendis eius quos vitae in nisi quisquam.
            Expedita consequuntur minus reiciendis quam alias vel, deleniti
            nobis, aspernatur, voluptatibus eligendi ducimus sunt aliquam quae
            blanditiis dolor. Autem, numquam nisi?
          </p>
          <p className="mb-8">
            Fuga ullam omnis odit labore quia quos. Dignissimos porro vitae vero
            quod quae, exercitationem veniam facilis ea impedit unde delectus?
            Libero dolores, officiis omnis soluta modi totam laudantium expedita
            voluptate?
          </p>
          <p className="mb-8">
            Eum voluptatum voluptas consequatur, facere quam minus, eveniet ad
            adipisci veniam commodi dolores nemo ipsum consequuntur mollitia
            explicabo porro maxime consectetur, voluptates saepe ipsam vel iste
            dolorem fugit? Soluta, deleniti!
          </p>
          <p className="mb-8">
            Expedita veritatis reiciendis cupiditate neque sequi unde quos ut
            architecto modi incidunt velit quia dolores tenetur quae omnis
            beatae, vel porro quod praesentium, sapiente perferendis
            voluptatibus. Perspiciatis eveniet maiores enim.
          </p>
        </div>
      </section>
      <section id="experience" className="full-width bg-base-100/70">
        <div className="p-4 md:p-8">
          <h2 className="text-lg uppercase font-medium my-4">Experience</h2>
          <p className="mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            distinctio tenetur quas autem et. Dolorum a voluptatibus pariatur
            dolore nobis quidem consequatur blanditiis esse commodi ea,
            cupiditate saepe deserunt! Dignissimos?
          </p>
          <p className="mb-8">
            Dolore perferendis reiciendis eius quos vitae in nisi quisquam.
            Expedita consequuntur minus reiciendis quam alias vel, deleniti
            nobis, aspernatur, voluptatibus eligendi ducimus sunt aliquam quae
            blanditiis dolor. Autem, numquam nisi?
          </p>
          <p className="mb-8">
            Fuga ullam omnis odit labore quia quos. Dignissimos porro vitae vero
            quod quae, exercitationem veniam facilis ea impedit unde delectus?
            Libero dolores, officiis omnis soluta modi totam laudantium expedita
            voluptate?
          </p>
          <p className="mb-8">
            Eum voluptatum voluptas consequatur, facere quam minus, eveniet ad
            adipisci veniam commodi dolores nemo ipsum consequuntur mollitia
            explicabo porro maxime consectetur, voluptates saepe ipsam vel iste
            dolorem fugit? Soluta, deleniti!
          </p>
          <p className="mb-8">
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
