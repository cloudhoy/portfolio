import { PropsWithChildren } from "react";
import { ArrowUpRight } from "react-feather";

export type ExperienceCardProps = PropsWithChildren & {
  workPeriod: string;
  cardTitle: string;
  href: string;
};

const ExperienceCard = ({
  workPeriod,
  cardTitle,
  href,
  children,
}: ExperienceCardProps) => {
  return (
    <div
      className="relative md:px-4 py-8 md:flex md:items-start gap-8 md:hover:!opacity-100 md:group-hover/list:opacity-50 
rounded-box transition-all md:hover:bg-base-100/50 md:hover:shadow-lg"
    >
      <div className="uppercase text-sm text-muted shrink-0 leading-10 min-w-32">
        {workPeriod}
      </div>
      <div>
        <a href={href} target="_blank" className="group link-hover">
          <span className="absolute inset-0 hidden md:block"></span>
          <h3 className="font-medium text-amped mb-1">
            {cardTitle}
            <ArrowUpRight className="inline w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </h3>
        </a>
        {children}
      </div>
    </div>
  );
};

export default ExperienceCard;
