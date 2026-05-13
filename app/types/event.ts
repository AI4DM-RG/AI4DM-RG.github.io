export interface SessionTime {
  date: string;
  startTime: string;
  timezone: string;
}

export interface EventItem {
  title: string;
  description: string;
  speakersbio: string;
  speakers: string[];
  type: string;
  session: SessionTime;
  tags: string[];
  place: string;
  recording_link?: string | null;
  join_link?: string | null;
  slides_link?: string | null;
  paper_links?: string[];
  event_link?: string | null;
}
