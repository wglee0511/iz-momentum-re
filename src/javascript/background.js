const backDiv = document.querySelector(".js-background");

const MEMBERNUMBER = 12;

const izPoster = {
  eunbi: "url(./src/izpic/eunbi.jpg)",
  sakura: "url(./src/izpic/sakura.jpg)",
  haewon: "url(./src/izpic/haewon.jpg)",
  yena: "url(./src/izpic/yena.jpg)",
  chaeyeon: "url(./src/izpic/chaeyeon.jpg)",
  chaewon: "url(./src/izpic/chaewon.jpg)",
  minju: "url(./src/izpic/minju.jpg)",
  nako: "url(./src/izpic/nako.jpg)",
  hitomi: "url(./src/izpic/hitomi.jpg)",
  yuri: "url(./src/izpic/yuri.jpg)",
  yujin: "url(./src/izpic/yujin.jpg)",
  wonyoung: "url(./src/izpic/wonyoung.jpg)",
};

const backInit = () => {
  const radomPosterNumber = Math.floor(Math.random() * MEMBERNUMBER);
  backDiv.style.backgroundImage =
    izPoster[Object.keys(izPoster)[radomPosterNumber]];
};

export default backInit;
