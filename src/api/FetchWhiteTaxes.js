import { BASE_URL } from "./DefaultUrl";

export async function getWhiteTaxes(token) {
  let data = await fetch(`${BASE_URL}white-taxes/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
  return data;
}
