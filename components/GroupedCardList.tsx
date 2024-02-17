import { ArrowUpRight } from "react-feather";
import FadeInView from "./FadeInView";

export type GroupedCardListProps = {
  className?: string;
};

const GroupedCardList = ({ className }: GroupedCardListProps) => {
  return (
    <ul className={`group/list flex flex-col gap-4 ${className}`}>
      <li>
        <FadeInView delay={300}>
          <div
            className="relative md:px-4 py-8 md:flex md:items-start gap-8 md:hover:!opacity-100 md:group-hover/list:opacity-50 
          rounded-box transition-all md:hover:bg-base-100/50 md:hover:shadow-lg"
          >
            <div className="uppercase text-sm text-muted shrink-0 leading-10 min-w-32">
              2022 — Present
            </div>
            <div>
              <a
                href="https://anacle.com/"
                target="_blank"
                className="group link-hover"
              >
                <span className="absolute inset-0 hidden md:block"></span>
                <h3 className="font-medium text-amped mb-1">
                  Software Engineer | Anacle Systems Ltd
                  <ArrowUpRight className="inline w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>
              </a>
              <p className="mb-4 text-sm">
                Maintain and customize a web-based Enterprise Resource Planning
                (ERP) solution specializing in lease, license, and tenancy
                management for global real estate companies including City
                Developments Limited, CapitaLand, and also government agencies
                like the Singapore Land Authority.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-secondary badge-outline">C#</span>
                <span className="badge badge-secondary badge-outline">SQL</span>
                <span className="badge badge-secondary badge-outline">
                  .NET Framework
                </span>
                <span className="badge badge-secondary badge-outline">
                  ASP.NET
                </span>
                <span className="badge badge-secondary badge-outline">
                  SQL Server
                </span>
              </div>
            </div>
          </div>
        </FadeInView>
      </li>
      <li>
        <FadeInView>
          <div
            className="relative md:px-4 py-8 md:flex md:items-start gap-8 md:hover:!opacity-100 md:group-hover/list:opacity-50 
          rounded-box transition-all md:hover:bg-base-100/50 md:hover:shadow-lg "
          >
            <div className="uppercase text-sm text-muted shrink-0 leading-10 min-w-32">
              2017 — 2022
            </div>
            <div>
              <a
                href="https://www.alfacom.com.my/"
                target="_blank"
                className="group link-hover"
              >
                <span className="absolute inset-0 hidden md:block"></span>
                <h3 className="font-medium text-amped mb-1">
                  Full-Stack Developer | Alfacom Technologies M Sdn Bhd
                  <ArrowUpRight className="inline w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>
              </a>

              <p className="mb-4 text-sm">
                Developed and delivered high-quality web applications to a
                diverse range of clients including RGE Group, S P Setia, RHB
                bank, Alliance Bank, Securities Commision Malaysia, Telekom
                Malaysia, and more. Provided leadership to teams of developers
                through close collaboration, mentoring, and knowledge shares.
                Spearheaded the development of a new in-house web application
                framework.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-secondary badge-outline">C#</span>
                <span className="badge badge-secondary badge-outline">React</span>
                <span className="badge badge-secondary badge-outline">
                  AngularJS
                </span>
                <span className="badge badge-secondary badge-outline">HTML</span>
                <span className="badge badge-secondary badge-outline">CSS</span>
                <span className="badge badge-secondary badge-outline">
                  Typescript
                </span>
                <span className="badge badge-secondary badge-outline">jQuery</span>
                <span className="badge badge-secondary badge-outline">
                  Javascript
                </span>
                <span className="badge badge-secondary badge-outline">SQL</span>
                <span className="badge badge-secondary badge-outline">
                  .NET Framework
                </span>
                <span className="badge badge-secondary badge-outline">
                  Entity Framework
                </span>
                <span className="badge badge-secondary badge-outline">
                  SharePoint 2019
                </span>
                <span className="badge badge-secondary badge-outline">
                  SPFX
                </span>
                <span className="badge badge-secondary badge-outline">
                  SQL Server
                </span>
              </div>
            </div>
          </div>
        </FadeInView>
      </li>
    </ul>
  );
};

export default GroupedCardList;
