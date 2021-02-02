export async function fetchImg() {
   const req = await fetch("https://api.unsplash.com/photos/random/?client_id=USScuo9D6Jru4OWJY1amVxC5VUjYw5mgpiFvwA-GrCQ");
   const data = await req.json();
   return data;
}
// export async function fetchImg() {
//    let imgData;
//    await fetch("https://api.unsplash.com/photos/random/?client_id=USScuo9D6Jru4OWJY1amVxC5VUjYw5mgpiFvwA-GrCQ")
//       .then((res) => res.json())
//       .then((data) => (imgData = data));
//    return imgData;
// }
