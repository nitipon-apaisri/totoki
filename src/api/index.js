export async function fetchImg() {
   const req = await fetch("https://api.unsplash.com/photos/random/?client_id=USScuo9D6Jru4OWJY1amVxC5VUjYw5mgpiFvwA-GrCQ");
   const data = await req.json();
   return data.urls.regular;
}
