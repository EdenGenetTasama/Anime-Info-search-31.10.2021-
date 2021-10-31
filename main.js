const urlOfAnima = "https://api.jikan.moe/v3";

async function getURLInfo(api) {
  try {
    return await fetch(api).then((res) => res.json());
  } catch (error) {
    return error;
  }
}

// getDogUrl(urlDogFacts).then(res=>console.log(res));

function runOfAllInfoFromAPI(arrayOfObject) {
  for (const item of arrayOfObject) {
    divShow.innerHTML += `<article id="cardID">
    <img src=${item.image_url} id="ImgStyle" class="allClass">
    <h2 class="allClass"> ${item.title}</h2>
    <p class="allClass">${item.synopsis}
    Numbers of episodes : ${item.episodes}</p>
    </article>`;
  }
}

function loadingGif() {
    
}

InputID.oninput = () => {
  if (InputID.value.length > 3) {
    getURLInfo(`${urlOfAnima}/search/anime?q=${InputID.value}`)
      .then((res) => {
        runOfAllInfoFromAPI(res.results);
      })
      .catch((rej) => {
        console.log(rej);
      })
      .finally(() => {});
  }
  if (InputID.value.length == 0) {
    getEmptyInfo();
  }
};

function getEmptyInfo() {
  divShow.innerHTML = " ";
}