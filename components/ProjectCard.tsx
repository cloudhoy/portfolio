import { PropsWithChildren } from "react";
import { ArrowUpRight } from "react-feather";

export type ProjectCardProps = PropsWithChildren & {
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  href: string;
  cardTitle: string;
};

const ProjectCard = ({
  imageSrc,
  imageAlt,
  imageClassName,
  href,
  cardTitle: title,
  children,
}: ProjectCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="group md:hover:!opacity-100 md:group-hover/list:opacity-50 md:hover:bg-base-100/50 md:hover:shadow-lg"
    >
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,3fr)] gap-4">
        <figure className="rounded-box overflow-hidden">
          <img src={imageSrc} alt={imageAlt} className={imageClassName} />
        </figure>
        <div className="grow">
          <h3 className="font-medium text-amped mb-1 text-base">
            {title}
            <ArrowUpRight className="inline w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </h3>
          {children}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
