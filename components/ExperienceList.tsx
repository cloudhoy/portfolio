import { ArrowUpRight } from "react-feather";
import FadeInView from "./FadeInView";
import ExperienceCard from "./ExperienceCard";

export type GroupedCardListProps = {
  className?: string;
};

const ExperienceList = ({ className }: GroupedCardListProps) => {
  return (
    <ul className={`group/list flex flex-col gap-4 ${className}`}>
      <li>
        <FadeInView>
          <ExperienceCard
            workPeriod="2022 — Present"
            cardTitle="Software Engineer | Anacle Systems Ltd"
            href="https://anacle.com/"
          >
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
          </ExperienceCard>
        </FadeInView>
      </li>
      <li>
        <FadeInView>
          <ExperienceCard
            workPeriod="2017 — 2022"
            cardTitle="Full-Stack Developer | Alfacom Technologies M Sdn Bhd"
            href="https://www.alfacom.com.my/"
          >
            <p className="mb-4 text-sm">
              Developed and delivered high-quality web applications to a diverse
              range of clients including RGE Group, S P Setia, RHB bank,
              Alliance Bank, Securities Commision Malaysia, Telekom Malaysia,
              and more. Provided leadership to teams of developers through close
              collaboration, mentoring, and knowledge shares. Spearheaded the
              development of a new in-house web application framework.
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
              <span className="badge badge-secondary badge-outline">
                jQuery
              </span>
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
              <span className="badge badge-secondary badge-outline">SPFX</span>
              <span className="badge badge-secondary badge-outline">
                SQL Server
              </span>
            </div>
          </ExperienceCard>
        </FadeInView>
      </li>
    </ul>
  );
};

export default ExperienceList;
