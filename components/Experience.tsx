import Image from "next/image";
import { PropsWithChildren } from "react";

export type ExperienceProps = PropsWithChildren & {
  title: string;
  imageSrc?: string;
  imageAlt?: string;
};

const Experience = ({
  title,
  imageSrc,
  imageAlt,
  children,
}: ExperienceProps) => {
  return (
    <div
      tabIndex={0}
      className="group/item card image-full mb-8 cursor-pointer
        before:transition-opacity before:!opacity-100
        focus:before:!opacity-70 hover:before:!opacity-70"
    >
      {imageSrc && imageAlt && (
        <figure>
          <img
            src={imageSrc}
            alt={imageAlt}
          />
        </figure>
      )}
      <div className="card-body text-muted group-hover/item:text-base-content group-focus/item:text-base-content">
        <div className="card-title">{title}</div>
        {children}
      </div>
    </div>
  );
};

export default Experience;
