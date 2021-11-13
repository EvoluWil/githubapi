export const getEventTypeLabel = (type: string): string => {
  switch (type) {
    case "ForkEvent":
      return "forked";
    case "WatchEvent":
      return "starred";
    case "CreateEvent":
      return "created";
    case "PublicEvent":
      return "created";
    default:
      return "";
  }
};
