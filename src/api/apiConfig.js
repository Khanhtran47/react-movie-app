const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "bebe93fb934e4f7696ccfa910e4220ca",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig
