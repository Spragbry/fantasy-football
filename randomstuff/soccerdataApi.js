let statsEL = document.getElementById("stats");
let statsArray;

/*let awayName = data[i]["awayTeam"]["name"];
let homeName = data[i]["homeTeam"]["name"];
let awayPlayers = data[i]["missings"]["players"][index]["player"];
let competition = data[i]["awayTeam"]["tournament"]["name"];*/

function getApi() {
  const soccerDataApiUrl =
    "https://soccer-data.p.rapidapi.com/match/missing-players-list?date=14%2F04%2F2021";
  fetch(soccerDataApiUrl, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "1204bd3cc2msh009e51b6e06a47dp18657cjsn67efd5e66598",
      "x-rapidapi-host": "soccer-data.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .then((statsData) => {
      for (let i = 0; i < 5; i++) {
        console.log(statsData[i].embed);
        let Element = document.createElement("div");
        Element.innerHTML = statsData[i].embed;
        statsEL.append(Element);
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

getApi();
