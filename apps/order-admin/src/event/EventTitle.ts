import { Event as TEvent } from "../api/event/Event";

export const EVENT_TITLE_FIELD = "descr";

export const EventTitle = (record: TEvent): string => {
  return record.descr || String(record.id);
};
