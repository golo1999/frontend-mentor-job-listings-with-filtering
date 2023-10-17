import { MouseEvent, useCallback, useEffect, useMemo, useState } from "react";

import { useDeviceType } from "hooks";
import { Job } from "models";
import { useFilteringStore } from "store";

import {
  Company,
  Container,
  Divider,
  Photo,
  Position,
  Tag,
} from "./JobCard.style";

interface Props {
  job: Job;
  tags: string[];
}

export function JobCard({ job, tags }: Props) {
  const deviceType = useDeviceType();
  const { filteredItems, addFilteredItem, setIsFilteringCardVisible } =
    useFilteringStore();
  const [photoSource, setPhotoSource] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  const {
    company,
    contract,
    featured: isFeatured,
    location,
    logo,
    new: isNew,
    position,
    postedAt,
  } = job;

  useEffect(() => {
    async function fetchPhotoSrc() {
      const svg = await import(`images/${logo.slice(9)}`);
      setPhotoSource(svg.default);
    }

    fetchPhotoSrc();
  }, [logo]);

  const handleContentContainerClick = useCallback(
    () => setIsSelected((value) => !value),
    []
  );

  const handleTagClick = useCallback(
    (event: MouseEvent<HTMLDivElement>, tagName: string) => {
      // stopPropagation is used for not triggering Container.Content's onClick event
      event.stopPropagation();
      addFilteredItem(tagName);

      if (filteredItems.length === 0) {
        setIsFilteringCardVisible(true);
      }
    },
    [filteredItems, addFilteredItem, setIsFilteringCardVisible]
  );

  const displayedTags = useMemo(
    () =>
      tags.map((tag, index) => (
        <Tag key={index} onClick={(e) => handleTagClick(e, tag)}>
          {tag}
        </Tag>
      )),
    [tags, handleTagClick]
  );

  const isDividerVisible =
    deviceType === "MOBILE" ||
    deviceType === "TABLET" ||
    deviceType === "LAPTOP";

  return (
    <Container.Main>
      {isSelected && <Container.Selected />}
      <Container.Content
        $isSelected={isSelected}
        onClick={handleContentContainerClick}
      >
        <Photo alt={company} src={photoSource} />
        <Container.JobDetails>
          <Container.Top>
            <Company>
              <b>{company}</b>
            </Company>
            {(isFeatured || isNew) && (
              <Container.IsNewIsFeatured>
                {isNew && <Container.IsNew>NEW!</Container.IsNew>}
                {isFeatured && (
                  <Container.IsFeatured>FEATURED</Container.IsFeatured>
                )}
              </Container.IsNewIsFeatured>
            )}
          </Container.Top>
          <Position>
            <b>{position}</b>
          </Position>
          <Container.PostedAtContractLocation>
            <span>{postedAt}</span>
            <span>&#183;</span>
            <span>{contract}</span>
            <span>&#183;</span>
            <span>{location}</span>
          </Container.PostedAtContractLocation>
        </Container.JobDetails>
        {isDividerVisible && <Divider />}
        <Container.Tags>{displayedTags}</Container.Tags>
      </Container.Content>
    </Container.Main>
  );
}
