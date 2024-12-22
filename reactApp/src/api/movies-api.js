export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=ba67eb9e185dcfb5cd14e2bf8f0c84b5&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };