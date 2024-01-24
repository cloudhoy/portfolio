import Layout from "@/components/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playground",
  description: "Just having some fun!",
};

export default function Page() {
  return (
    <Layout>
      <h1 className="full-width bg-neutral p-4 pt-16 md:pt-20 text-xl font-medium">
        Playground
      </h1>
      <section className="full-width p-4">
        <h2 className="mb-4 text-xl">Section 1</h2>
        <p className="mb-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
          vitae possimus! Magni excepturi tempore amet dignissimos laudantium
          architecto magnam aperiam facilis deserunt, veniam obcaecati optio
          quisquam praesentium recusandae odit fugiat.
        </p>
      </section>
    </Layout>
  );
}
