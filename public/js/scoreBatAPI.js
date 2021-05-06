let videoEL = document.getElementById("video");
let videoArray;

let highlights = document.getElementById('dropdown0');
let premier = document.getElementById('dropdown1');
let laliga = document.getElementById('dropdown2');
let serieA = document.getElementById('dropdown3');
let ligue1 = document.getElementById('dropdown4');
let bundesliga = document.getElementById('dropdown5');

function getApi() {
  const scoreBatUrl = "https://www.scorebat.com/video-api/v1/";
  fetch(scoreBatUrl, {
    method: "GET",
    withCredentials: true,
  })
    .then((response) => response.json())
    .then(function(data) {
      console.log(data);
      if(data){
        let premierL = data.filter(
          (video) =>
          video.competition.name === "ENGLAND: Premier League" ||
          video.competition.name === "PORTUGAL: Primeira Liga" ||
          video.competition.name === "SPAIN: La Liga" ||
          video.competition.name === "bundes liga" ||
          video.competition.name === "ITALY: Serie A" ||
          video.competition.name === "FRANCE: Ligue 1"
  
        );
        console.log(premierL);
        for (let i = 0; i < 5; i++) {
          console.log(premierL[i].embed);
          let Element = document.createElement("div");
          Element.innerHTML = premierL[i].embed;
          videoEL.append(Element);
        }

      }
      else if(dropdown.value === 0)
      {
        let premierL = data.filter(
          (video) =>
          video.competition.name === "ENGLAND: Premier League" ||
          video.competition.name === "PORTUGAL: Primeira Liga" ||
          video.competition.name === "SPAIN: La Liga" ||
          video.competition.name === "bundes liga" ||
          video.competition.name === "ITALY: Serie A" ||
          video.competition.name === "FRANCE: Ligue 1"
  
        );
        console.log(premierL);
        for (let i = 0; i < 5; i++) {
          console.log(premierL[i].embed);
          let Element = document.createElement("div");
          Element.innerHTML = premierL[i].embed;
          videoEL.append(Element);
        }
      }
      else if(dropdown.value === 1){
        let premierL = data.filter(
          (video) =>
          video.competition.name === "ENGLAND: Premier League" ||
          video.competition.name === "PORTUGAL: Primeira Liga" 
           
        );
        console.log(premierL);
        for (let i = 0; i < 5; i++) {
          console.log(premierL[i].embed);
          let Element = document.createElement("div");
          Element.innerHTML = premierL[i].embed;
          videoEL.append(Element);
        }

      }
      else if(dropdown.value === 2){
        let premierL = data.filter(
          (video) =>
            video.competition.name === "SPAIN: La Liga" 
        );
        console.log(premierL);
        for (let i = 0; i < 5; i++) {
          console.log(premierL[i].embed);
          let Element = document.createElement("div");
          Element.innerHTML = premierL[i].embed;
          videoEL.append(Element);
        }

      }
      else if(dropdown.value === 3){
        let premierL = data.filter(
          (video) =>
          video.competition.name === "ITALY: Serie A"
        );
        console.log(premierL);
        for (let i = 0; i < 5; i++) {
          console.log(premierL[i].embed);
          let Element = document.createElement("div");
          Element.innerHTML = premierL[i].embed;
          videoEL.append(Element);
        }

      }
      else if(dropdown.value === 4){
        let premierL = data.filter(
          (video) =>
          video.competition.name === "FRANCE: Ligue 1"
  
        );
        console.log(premierL);
        for (let i = 0; i < 5; i++) {
          console.log(premierL[i].embed);
          let Element = document.createElement("div");
          Element.innerHTML = premierL[i].embed;
          videoEL.append(Element);
        }

      }
      else if(dropdown.value === 5){
        let premierL = data.filter(
          (video) =>
          //video.competition.name === "ENGLAND: Premier League"
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

      }
      else{
        premierL = data.video;
      }
      
      /*for (let i = 0; i < 5; i++) {
        console.log(premierL[i].embed);
        let Element = document.createElement("div");
        Element.innerHTML = premierL[i].embed;
        videoEL.append(Element);
      }*/
    })
    .catch(function (error) {
      console.log(error);
    });
}

getApi();


