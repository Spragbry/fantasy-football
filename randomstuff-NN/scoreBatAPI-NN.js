function getApi() {
  const scoreBatUrl = "https://www.scorebat.com/video-api/v1/";
  fetch(scoreBatUrl, {
    method: "GET",
    withCredentials: true,
  })
    .then((response) => response.json())
    .catch(function (error) {
      console.log(error);
    });
}
