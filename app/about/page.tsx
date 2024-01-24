import FadeIn from "@/components/FadeIn";
import Layout from "@/components/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "about this site",
};

export default function Page() {
  return (
    <Layout>
      <h1 className="full-width bg-neutral p-4 pt-16 md:pt-20 text-xl font-medium">
        About
      </h1>
      <section className="full-width p-4">
        <h2 className="mb-4 text-xl">Section 1</h2>
        <p className="mb-[1000px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
          vitae possimus! Magni excepturi tempore amet dignissimos laudantium
          architecto magnam aperiam facilis deserunt, veniam obcaecati optio
          quisquam praesentium recusandae odit fugiat.
        </p>
        <FadeIn>
          <div className="card bg-neutral shadow-xl">
            <div className="card-body">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum, vitae possimus! Magni excepturi tempore amet
                dignissimos laudantium architecto magnam aperiam facilis
                deserunt, veniam obcaecati optio quisquam praesentium recusandae
                odit fugiat.
              </p>
            </div>
          </div>
        </FadeIn>
        <div className="mt-80">END</div>
      </section>
    </Layout>
  );
}
