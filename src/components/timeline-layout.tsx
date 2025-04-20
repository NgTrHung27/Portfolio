import {
  Timeline,
  TimelineDescription,
  TimelineHeader,
  TimelineItem,
  TimelinePosition,
  TimelineTime,
  TimelineTitle,
} from "@/components/ui/timeline";

import { timelineData } from "@/data/timelineData";

export const TimelineLayout = () => {
  return (
    <Timeline className="reveal-up mt-8">
      {timelineData.map((item) => (
        <TimelineItem key={item.id}>
          <TimelineHeader>
            <TimelineTime>{item.time}</TimelineTime>
            <TimelineTitle>{item.title}</TimelineTitle>
          </TimelineHeader>
          <TimelinePosition>{item.position}</TimelinePosition>
          {item.description && (
            <TimelineDescription>{item.description}</TimelineDescription>
          )}
        </TimelineItem>
      ))}
    </Timeline>
  );
};
