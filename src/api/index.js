//Fucntion for searching by word
export async function searching(query) {
   let KEY = process.env.VUE_APP_CLIENT_ID;
   const req = await fetch(`https://api.unsplash.com/search/photos?page=1&per_page=12&query=${query}&client_id=${KEY}`);
   const data = await req.json();
   return data;
}
