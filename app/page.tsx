import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CreditCard,
  Gift,
  GitHub,
  Linkedin,
  Mail,
  ShoppingBag,
} from "react-feather";

export default function Page() {
  return (
    <Layout>
      <section id="home" className="full-width bg-neutral">
        <div className="px-4 pt-12 md:pt-20 pb-0">
          <div className="md:flex h-full">
            <div className="pt-8">
              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tighter font-sans-display -ml-1">
                Tony Cheong
              </h1>
              <p className="mb-4 font-medium text-lg sm:text-xl md:text-2xl tracking-tighter text-muted">
                Software Engineer at{" "}
                <a
                  href="#"
                  target="_blank"
                  className="link-hover transition-[color]"
                >
                  Anacle Systems
                </a>
              </p>
              <p className="mb-4 text-muted">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti facere doloremque voluptatem dolorum corporis maiores,
                maxime repellat veniam corrupti ipsa voluptatibus enim sequi!{" "}
                <a
                  href="#"
                  target="_blank"
                  className="link-hover font-semibold"
                >
                  some link here
                </a>{" "}
                Voluptatem eos possimus cum alias dolorum et!
              </p>
              <address className="mb-4">
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
            </div>
            <div className="relative h-full w-full hidden md:grid overflow-hidden">
              <div className="col-start-1 row-start-1 h-full w-full"></div>
              {/* <Image
                src="/avatar_nobg.png"
                alt="me"
                fill
                className="object-contain object-left-bottom drop-shadow-2xl"
              /> */}
            </div>
          </div>
        </div>
      </section>

      <section id="components" className="full-width px-4 py-8">
        <h2 className="text-2xl font-medium mb-4">
          Components
        </h2>
        <p className="mb-8 text-muted">
          Check out these components and their theme color variants!
        </p>
        <article>
          <h3 className="mb-4 text-lg font-medium">Buttons</h3>
          <div className="mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 justify-start gap-2">
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-accent">Accent</button>
            <button className="btn btn-neutral">Neutral</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-info">Info</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-error">Error</button>
            <button className="btn btn-ghost">Ghost</button>
          </div>
        </article>
        <article>
          <h3 className="mb-4 text-lg font-medium">Cards</h3>
          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stack auto-rows-[1fr]">
              <div className="card bg-neutral shadow-xl h-full">
                <div className="card-body items-center text-center">
                  <CreditCard className="w-12 h-12 stroke-warning" />
                  <h2 className="card-title">Make secure payments</h2>
                  <p className="mb-4">
                    If a dog chews shoes whose shoes does he choose?
                  </p>
                  <div className="card-actions justify-end">
                    <a href="#" className="link-hover link-primary group/link">
                      Learn more{" "}
                      <ArrowUpRight className="inline-block transition-[transform] group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card bg-warning h-full w-full"></div>
            </div>
            <div className="stack">
              <div className="card bg-neutral shadow-xl h-full">
                <div className="card-body items-center text-center">
                  <Gift className="w-12 h-12 stroke-info" />
                  <h2 className="card-title">Earn rewards</h2>
                  <p className="mb-4">
                    If a dog chews shoes whose shoes does he choose?
                  </p>
                  <div className="card-actions justify-end">
                    <a href="#" className="link-hover link-primary group/link">
                      Learn more{" "}
                      <ArrowUpRight className="inline-block transition-[transform] group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card bg-info h-full w-full"></div>
            </div>
            <div className="stack">
              <div className="card bg-neutral shadow-xl h-full">
                <div className="card-body items-center text-center">
                  <ShoppingBag className="w-12 h-12 stroke-success" />
                  <h2 className="card-title">Shop till you drop!</h2>
                  <p className="mb-4">
                    If a dog chews shoes whose shoes does he choose?
                  </p>
                  <div className="card-actions justify-end">
                    <a href="#" className="link-hover link-primary group/link">
                      Learn more{" "}
                      <ArrowUpRight className="inline-block transition-[transform] group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card bg-success h-full w-full"></div>
            </div>
          </div>
        </article>
      </section>

      <section className="full-width bg-neutral px-4 py-8">
        <h2 className="mb-4 text-2xl font-medium">Typography</h2>
        <p className="mb-12 text-lg text-muted">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          facere doloremque voluptatem dolorum corporis maiores, maxime repellat
          veniam corrupti ipsa voluptatibus enim sequi! Voluptatem eos possimus
          cum alias dolorum et!
        </p>
        <h3 className="mb-4 text-xl font-medium">Heading Number 3</h3>
        <p className="mb-12 text-base text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cum
          rerum facere id magnam rem, reprehenderit, eius nisi ipsum eos
          repellendus enim porro exercitationem quod autem odit nulla officia
          deleniti!
        </p>
        <h4 className="mb-4 text-lg font-medium">Heading Number 4</h4>
        <p className="mb-12 text-sm text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          dolorum impedit laborum ducimus recusandae accusantium repudiandae
          saepe. Atque quibusdam nam fuga reiciendis at. Error, illo
          perferendis. Temporibus earum dignissimos vero.
        </p>
        <h5 className="mb-4 text-base font-medium">Heading Number 5</h5>
        <p className="mb-12 text-xs text-muted">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam alias
          beatae exercitationem at tenetur mollitia pariatur dolorum earum
          consequatur nostrum, ullam consequuntur placeat illo eveniet aliquid
          esse quidem repellendus ratione?
        </p>
      </section>

      <footer className="footer full-width p-2 py-8 text-xs text-muted rounded-t-xl">
        <aside className="w-full place-items-end text-end">
          <p className="leading-tight">
            Designed & built with 💖 by{" "}
            <a href="https://www.linkedin.com/in/tcheong/" className="link-hover">
              Tony Cheong
            </a>
          </p>
          <p className="leading-tight">
            Powered by{" "}
            <a href="https://nextjs.org" target="_blank" className="link-hover">
              Next.js
            </a>
            ,{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              className="link-hover"
            >
              TailwindCSS
            </a>
            ,{" "}
            <a
              href="https://daisyui.com"
              target="_blank"
              className="link-hover"
            >
              daisyUI
            </a>
            ,{" "}
            <a
              href="https://aws.amazon.com/s3/"
              target="_blank"
              className="link-hover"
            >
              Amazon S3
            </a>
            ,{" "}
            <a
              href="https://aws.amazon.com/cloudfront/"
              target="_blank"
              className="link-hover"
            >
              CloudFront
            </a>
            , and{" "}
            <Link href="/about" className="link-hover">
              more!
            </Link>
          </p>
        </aside>
      </footer>
    </Layout>
  );
}
