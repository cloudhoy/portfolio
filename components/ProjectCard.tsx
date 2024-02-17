import { PropsWithChildren } from "react";
import { ArrowUpRight } from "react-feather";

export type ProjectCardProps = PropsWithChildren & {
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  href: string;
  cardTitle: string;
  status?: "soon" | "contributor" | undefined;
};

const ProjectCard = ({
  imageSrc,
  imageAlt,
  imageClassName,
  href,
  cardTitle,
  status,
  children,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col relative rounded-box md:flex-row items-start gap-4 transition-all md:px-4 py-8 md:hover:!opacity-100 md:group-hover/list:opacity-50 md:hover:bg-base-100/50 md:hover:shadow-lg">
      <div className="md:w-1/4 shrink-0 grid">
        <figure className="rounded-box overflow-hidden col-start-1 row-start-1">
          <img src={imageSrc} alt={imageAlt} className={imageClassName} />
        </figure>
        {status == "soon" && (
          <div className="z-10 col-start-1 row-start-1 badge badge-warning float-end badge-sm">
            Coming soon
          </div>
        )}
        {status == "contributor" && (
          <div className="z-10 col-start-1 row-start-1 badge badge-primary float-end badge-sm">
            Contributor
          </div>
        )}
      </div>
      <div className="grow">
        <a href={href} target="_blank" className="group link-hover">
          <span className="absolute inset-0 hidden md:block"></span>
          <h3 className="font-medium text-amped mb-1 text-base">
            {cardTitle}
            <ArrowUpRight className="inline w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </h3>
        </a>
        {children}
      </div>
    </div>
  );
};

export default ProjectCard;
