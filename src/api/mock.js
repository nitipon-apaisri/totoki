import * as MOCK from "/mock.json";
export function fetchImg() {
   return MOCK[1].urls.regular;
}
