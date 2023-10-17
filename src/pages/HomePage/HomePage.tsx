import axios from "axios";
import { Fragment, useEffect, useMemo, useState } from "react";

import { FilteringCard, JobCard } from "components";
import { useDeviceType } from "hooks";
import HeaderDesktop from "images/bg-header-desktop.svg";
import HeaderMobile from "images/bg-header-mobile.svg";
import { Job } from "models";
import { useFilteringStore } from "store";

import { Container, Header, JobsList } from "./HomePage.style";

export function HomePage() {
  const deviceType = useDeviceType();
  const { filteredItems, isFilteringCardVisible } = useFilteringStore();
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get<Job[]>("data.json");
      setJobs(data);
    }

    fetchData();
  }, []);

  const displayedHeader = useMemo(
    () => (deviceType === "MOBILE" ? HeaderMobile : HeaderDesktop),
    [deviceType]
  );
  const displayedJobs = useMemo(
    () =>
      jobs.map((job, index) => {
        const { languages, level, role, tools } = job;
        const tags = [role as string, level as string]
          .concat(languages)
          .concat(tools);

        if (filteredItems.length > 0) {
          const isMatching = filteredItems.every((item) => tags.includes(item));

          if (!isMatching) {
            return <Fragment key={index} />;
          }
        }

        return <JobCard job={job} key={index} tags={tags} />;
      }),
    [filteredItems, jobs]
  );

  return (
    <main>
      <Header alt="header" src={displayedHeader} />
      <Container.Jobs.Outer>
        <Container.Jobs.Inner $isFilteringCardVisible={isFilteringCardVisible}>
          {isFilteringCardVisible && <FilteringCard />}
          <JobsList>{displayedJobs}</JobsList>
        </Container.Jobs.Inner>
      </Container.Jobs.Outer>
    </main>
  );
}
