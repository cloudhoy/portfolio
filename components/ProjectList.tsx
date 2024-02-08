import { ArrowUpRight } from "react-feather";
import config from "../app/config";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <ul className="group/list grid grid-cols-1 gap-4">
      <li>
        <ProjectCard
          imageSrc={config.metadata.socialBanner}
          imageAlt="tonycheong.com social banner"
          imageClassName="brightness-80 object-cover"
          href="https://github.com/cloudhoy/portfolio"
          cardTitle="TonyCheong.com"
        >
          <p className="text-sm leading-loose">
            My personal website. You're HERE right now!
          </p>
          <p className="mb-4 text-sm leading-loose">
            Roughly designed in Figma, developed with Next.js, hosted on AWS S3,
            and delivered via Cloudfront.
          </p>
          <div className="card-actions">
            <span className="badge badge-info badge-outline">React</span>
            <span className="badge badge-info badge-outline">Typescript</span>
            <span className="badge badge-info badge-outline">HTML</span>
            <span className="badge badge-info badge-outline">CSS</span>
            <span className="badge badge-secondary badge-outline">Next.js</span>
            <span className="badge badge-accent badge-outline">Amazon S3</span>
            <span className="badge badge-accent badge-outline">
              Amazon Cloudfront
            </span>
            <span className="badge badge-accent badge-outline">Figma</span>
          </div>
        </ProjectCard>
      </li>
      <li>
        <ProjectCard
          imageSrc="https://raw.githubusercontent.com/lucavallin/verto/main/public/meta.png"
          imageAlt="verto.sh social banner"
          imageClassName="object-cover"
          href="https://www.verto.sh"
          cardTitle="Verto.sh"
        >
          <p className="mb-4 text-sm leading-loose">
            If a dog chews shoes whose shoes does he choose?
          </p>
          <div className="card-actions">
            <span className="badge badge-info badge-outline">GraphQL</span>
            <span className="badge badge-info badge-outline">React</span>
            <span className="badge badge-info badge-outline">Typescript</span>
            <span className="badge badge-info badge-outline">HTML</span>
            <span className="badge badge-info badge-outline">CSS</span>
            <span className="badge badge-secondary badge-outline">Next.js</span>
          </div>
        </ProjectCard>
      </li>
      <li>
        <ProjectCard
          imageSrc="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          imageAlt="ecommerce.tonycheong.com social banner"
          imageClassName="object-cover"
          href="https://ecommerce.tonycheong.com"
          cardTitle="Ecommerce"
        >
          <p className="text-sm leading-loose">
            My personal website. You're HERE right now!
          </p>
          <p className="mb-4 text-sm leading-loose">
            Roughly designed in Figma, developed with Next.js, hosted on AWS S3,
            and delivered via Cloudfront.
          </p>
          <div className="card-actions">
            <span className="badge badge-info badge-outline">React</span>
            <span className="badge badge-info badge-outline">Typescript</span>
            <span className="badge badge-info badge-outline">HTML</span>
            <span className="badge badge-info badge-outline">CSS</span>
            <span className="badge badge-secondary badge-outline">Next.js</span>
            <span className="badge badge-accent badge-outline">Amazon S3</span>
            <span className="badge badge-accent badge-outline">
              Amazon Cloudfront
            </span>
            <span className="badge badge-accent badge-outline">Figma</span>
          </div>
        </ProjectCard>
      </li>
      
    </ul>
  );
};

export default ProjectList;
