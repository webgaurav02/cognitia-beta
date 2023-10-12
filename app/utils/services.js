import { EVENTS } from "./constants";

export async function getEvents() {
  let response = await fetch(EVENTS, {
    method: "GET",
  });
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
  return data.filter((event) => event.department === "CE");
}
