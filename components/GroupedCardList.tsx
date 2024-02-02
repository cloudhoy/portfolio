export type GroupedCardListProps = {
  className?: string;
};

const GroupedCardList = ({ className }: GroupedCardListProps) => {
  return (
    <ul className={`group/list flex flex-col gap-12 ${className}`}>
      <li>
        <div className="md:p-4 md:flex md:items-start gap-8 md:hover:!opacity-100 md:group-hover/list:opacity-50">
          <div className="uppercase text-sm text-muted shrink-0 leading-10 min-w-32">
            2022 — Present
          </div>
          <div>
            <h3 className="font-medium text-amped mb-1">
              Software Engineer | Anacle Systems Ltd
            </h3>
            <p className="mb-4 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
              aliquid laudantium aspernatur dolores veniam obcaecati velit
              molestiae ipsam cumque rem, id eos modi dolor accusamus natus odio
              porro tempora quibusdam?
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-info badge-outline">C#</span>
              <span className="badge badge-info badge-outline">SQL</span>
              <span className="badge badge-success badge-outline">
                .NET Framework
              </span>
              <span className="badge badge-success badge-outline">ASP.NET</span>
              <span className="badge badge-secondary badge-outline">
                SQL Server
              </span>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="md:p-4 md:flex md:items-start gap-8 md:hover:!opacity-100 md:group-hover/list:opacity-50">
          <div className="uppercase text-sm text-muted shrink-0 leading-10 min-w-32">
            2017 — 2022
          </div>
          <div>
            <h3 className="font-medium text-amped mb-1">
              Full-Stack Developer | Alfacom Technologies M Sdn Bhd
            </h3>
            <p className="mb-4 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
              aliquid laudantium aspernatur dolores veniam obcaecati velit
              molestiae ipsam cumque rem, id eos modi dolor accusamus natus odio
              porro tempora quibusdam?
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-info badge-outline">C#</span>
              <span className="badge badge-info badge-outline">HTML</span>
              <span className="badge badge-info badge-outline">CSS</span>
              <span className="badge badge-info badge-outline">Typescript</span>
              <span className="badge badge-info badge-outline">jQuery</span>
              <span className="badge badge-info badge-outline">SQL</span>
              <span className="badge badge-success badge-outline">React</span>
              <span className="badge badge-success badge-outline">
                AngularJS
              </span>
              <span className="badge badge-success badge-outline">
                .NET Framework
              </span>
              <span className="badge badge-success badge-outline">
                SharePoint 2019
              </span>
              <span className="badge badge-success badge-outline">SPFX</span>
              <span className="badge badge-secondary badge-outline">
                SQL Server
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default GroupedCardList;
