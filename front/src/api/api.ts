import { ROUTE } from "../utils";
import { iProduct, iRequestBody } from "../utils/type";


export const request = (method: string = "GET", body: iProduct | null = null, id: string = "") => {
  const requestBody: iRequestBody = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: method,
  }

  if (body) {
    requestBody.body = JSON.stringify(body);
  }

  return fetch(`${ROUTE}/products/${id}`, requestBody).then(res => {
    if (Math.floor(res.status / 100) === 2 || Math.floor(res.status / 100) === 3) {
      return res.json();
    } else {
      throw res.json();
    }
  });
}