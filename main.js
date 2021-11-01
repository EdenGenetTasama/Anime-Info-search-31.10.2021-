const urlOfAnima = "https://api.jikan.moe/v3";

console.log("https://api.jikan.moe/v3/search/anime?q=mal_id/5040");
async function getURLInfo(api) {
  try {
    loadingGif()
    return await fetch(api).then((res) => res.json());
  } catch (error) {
    return error;
  }
}


function runOfAllInfoFromAPI(arrayOfObject) {
  for (const item of arrayOfObject) {
    divShow.innerHTML += `<article id="cardID">
    <img src=${item.image_url} id="ImgStyle" class="allClass"><br>
    <h2 class="allClass" id="titleId"> ${item.title}</h2><br>
    <p class="allClass">${item.synopsis}<br>
    Numbers of episodes : ${item.episodes}</p>
    </article>`;
  }
}

function loadingGif() {
    divShow.innerHTML  =`<img src="./89MF39Y gif.gif" id="gifImg">`
}

function stopGif() {
    gifImg.style.display = "none"
}


function getEmptyInfo() {
  divShow.innerHTML = " ";
}

InputID.oninput = () => {
  if (InputID.value.length >= 3) {
    getURLInfo(`${urlOfAnima}/search/anime?q=${InputID.value}`)
      .then((res) => {
        runOfAllInfoFromAPI(res.results);
      })
      .catch((rej) => {
        console.log(rej);
      })
      .finally(() => {stopGif()});
  }
  if (InputID.value.length == 0) {
    getEmptyInfo();
  }
};


