import { EVENTS } from "./constants";

export async function getEvents() {
  let response = await fetch(
    EVENTS,
    {
      method: "GET",
    },
    { next: { revalidate: 3600 } }
  );
  let data = await response.json();
  return data;
}

export function getCodingClubEvents(data) {
  return data.filter((event) => event.department === "CC");
}

export function getRoboticClubEvents(data) {
  return data.filter((event) => event.department === "RC");
}

export function getDepartmentalEvents(data) {
  return data.filter((event) => event.department === "DPT");
}

export function getAstonomyEvents(data) {
  return data.filter((event) => event.department === "AC");
}

export function getGamingEvents(data) {
  return data.filter((event) => event.department === "GE");
}

export function getOtherEvents(data) {
  return data.filter((event) => event.department === "OTH");
}
