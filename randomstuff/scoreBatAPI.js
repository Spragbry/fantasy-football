let videoEL = document.getElementById("video");
let videoArray;

function getApi() {
  const scoreBatUrl = "https://www.scorebat.com/video-api/v1/";
  fetch(scoreBatUrl, {
    method: "GET",
    withCredentials: true,
  })
    .then((response) => response.json())
    .then((data) => {
      let premierL = data.filter(
        (video) =>
          // video.competition.name === "ENGLAND: Premier League" ||
          // video.competition.name === "PORTUGAL: Primeira Liga" ||
          // video.competition.name === "SPAIN: La Liga" ||
          video.competition.name === "bundes liga"
        //video.competition.name === "ITALY: Serie A" ||
        //video.competition.name === ""FRANCE: Ligue 1""

        //la liga
        //bundes liga
        //serieA
        //ligue 1
      );
      console.log(premierL);

      for (let i = 0; i < 5; i++) {
        console.log(premierL[i].embed);
        let Element = document.createElement("div");
        Element.innerHTML = premierL[i].embed;
        videoEL.append(Element);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

getApi();

//let array = getApi();
//console.log(array);

/*for (let i = 0, l = data.embed.length; i < l; i++){
  //Calling all the Lat's and Lon's from array
  let lon = embed"features"][i]["geometry"]["paths"][0][0][0];*/
