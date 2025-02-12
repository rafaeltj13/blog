interface ExperienceItemProps {
  timeRange: string;
  title: string;
  description: string;
  technologies: string[];
  company: string;
}

export default function ExperienceItem({
  timeRange,
  title,
  description,
  technologies,
  company,
}: ExperienceItemProps) {
  return (
    <div className="group relative grid mb-8 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 w-full">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-muted/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
        {timeRange}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-foreground">
          <div className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary group/link text-base">
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            {title} - {company}
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal text-muted-foreground">
          {description}
        </p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {technologies.map((tech, index) => (
            <li key={index} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-primary group-hover:bg-muted text-muted group-hover:text-primary transition-all px-3 py-1 text-xs font-medium leading-5 dark:text-muted-foreground">
                {tech}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
