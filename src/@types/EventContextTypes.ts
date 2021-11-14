import { EventTypes } from "./Event";

export interface EventContextTypes {
  events: EventTypes[];
  getEvents: (qury: any, page?: number) => Promise<boolean | void>;
  loadingEvents: boolean;
}
