import { EventTypes } from "./Event";

export interface EventContextTypes {
  events: EventTypes[];
  getEvents: () => Promise<void>;
  loadingEvents: boolean;
}
