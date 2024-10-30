const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTc5MzBkNWJiY2QwOWM0MGVhYmZkNjBhN2FkZjVmZCIsIm5iZiI6MTczMDEyNTY5Mi4xMDk2MDQsInN1YiI6IjY3MWY5ZDljMWVhMzM5MjgyOTdkYzAwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dJrWjAVoa_gNzTe6ZcJRa2k9gTCq4qdSk4UyVtaMlpY",
  },
};

export default function () {
  function getimages() {
    fetch("https://api.themoviedb.org/3/person/6193/images", options)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }
  getimages();
}
