let videoEL = document.getElementById("video");
let videoArray;

let dropdown = document.getElementById('dropdown'); 


function getApi() {
  const scoreBatUrl = "https://www.scorebat.com/video-api/v1/";
  fetch(scoreBatUrl, {
    method: "GET",
    withCredentials: true,
  })
    .then((response) => response.json())
    .then(function(data) {
      console.log(data);
      videoEL.innerHTML = '';
      const dropdownValue = parseInt(dropdown.value);
      if(dropdownValue === 0)
      {
        const highlights = data.filter(
          (video) =>
          video.competition.name === "ENGLAND: Premier League" ||
          video.competition.name === "PORTUGAL: Primeira Liga" ||
          video.competition.name === "SPAIN: La Liga" ||
          video.competition.name === "bundes liga" ||
          video.competition.name === "ITALY: Serie A" ||
          video.competition.name === "FRANCE: Ligue 1"
  
        );
        console.log(highlights);
        for (let i = 0; i < 5; i++) {
          console.log(highlights[i].embed);
          let Element = document.createElement("div");
          Element.innerHTML = highlights[i].embed;
          videoEL.append(Element);
        }
      }
      else if(dropdownValue === 1){
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
      else if(dropdownValue === 2){
        let laliga = data.filter(
          (video) =>
            video.competition.name === "SPAIN: La Liga" 
        );
        console.log(laliga);
        for (let i = 0; i < 5; i++) {
          console.log(laliga[i].embed);
          let Element = document.createElement("div");
          Element.innerHTML = laliga[i].embed;
          videoEL.append(Element);
        }

      }
      else if(dropdownValue === 3){
        let serieA= data.filter(
          (video) =>
          video.competition.name === "ITALY: Serie A"
        );
        console.log(serieA);
        for (let i = 0; i < 5; i++) {
          console.log(serieA[i].embed);
          let Element = document.createElement("div");
          Element.innerHTML = serieA[i].embed;
          videoEL.append(Element);
        }

      }
      else if(dropdownValue === 4){
        let ligue = data.filter(
          (video) =>
          video.competition.name === "FRANCE: Ligue 1"
  
        );
        console.log(ligue);
        for (let i = 0; i < 5; i++) {
          console.log(ligue[i].embed);
          let Element = document.createElement("div");
          Element.innerHTML = ligue[i].embed;
          videoEL.append(Element);
        }

      }
      else if(dropdownValue === 5){
        let bundes = data.filter(
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
        console.log(bundes);
        for (let i = 0; i < 5; i++) {
          console.log(bundes[i].embed);
          let Element = document.createElement("div");
          Element.innerHTML = bundes[i].embed;
          videoEL.append(Element);
        }

      }
      else{
        console.log("roadbump");
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

dropdown.onchange = getApi;





