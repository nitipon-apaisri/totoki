import * as MOCK from "/mock.json";
export function fetchImg() {
   let images = [];

   for(let i = 0; i < 8; i++) {
      images.push({url: MOCK[1].urls.thumb});
    
   }
   return images;
}
 