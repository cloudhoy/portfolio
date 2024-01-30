const GroupedCardList = () => {
  return (
    <ul className="group">
      <li>
        <div className="md:flex md:items-start gap-8">
          <div className="uppercase text-sm font-medium text-muted shrink-0 leading-10">
            2022 — Present
          </div>
          <div>
            <h3 className="font-medium text-amped mb-1">Software Engineer | Anacle Systems Ltd</h3>
            <p className="mb-4 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
              aliquid laudantium aspernatur dolores veniam obcaecati velit
              molestiae ipsam cumque rem, id eos modi dolor accusamus natus odio
              porro tempora quibusdam?
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-primary">C#</span>
              <span className="badge badge-secondary">
                .NET Framework
              </span>
              <span className="badge badge-secondary">Next.js</span>
              <span className="badge badge-secondary">React</span>
              <span className="badge badge-primary">Typescript</span>
              <span className="badge badge-accent">AWS S3</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default GroupedCardList;
