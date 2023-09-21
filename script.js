const API_KEY ="1d7aa9f1527346e1afd07c89392c5010";
const url ="https://newsapi.org/v2/everything?q=";

window.addEventListener('load', ()=>fetchNews("India"));


async function fetchNews(query){
     const res = await fetch(`${url}${query}&apikey=${API_KEY}`);
     const data = await res.json();
     console.log(data);
    bindData(data.articles);
}

function bindData(data){
    const cardsContainer = document.getElementById("cards-container");
    const templateEl = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";


    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}


function fillDataInCard(cardClone, articles){
    const newsimg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsimg.src = articles.urlToImage;
    newsTitle.innerHTML = articles.title;
    newsDesc.innerHTML = articles.description;
    const date = new date(articles.publidhedAt).toLocaleString("en-US",{
        timeZone: "Asia/Jakarta"
    })
    newsSource.innerHTML = `${articles.source.name}. ${date}`
}




















































// function bindData(articles){
//     const cardsContainer = document.getElementById('cards-container');
//     const newsCardTemplate = document.getElementById('template-news-card');

//    cardsContainer.innerHTML = "";

//    articles.forEach((article) => {
//     if(!article.ulrTOImage) return;
//     const cardClone = newsCardTemplate.content.cloneNode(true);
//     fillDataIncard(cardClone,article);
//     cardscontainer.appendChild(cardClone);
//    });
// }

// function fillDataIncard(cardClone, article){
//     const newsImg = cardClone.queryselector('#news-img');
//     const newsTitle = cardClone.queryselector('#news-title');
//     const newsSource = cardClone.queryselector('#news-source');
//     const newsDesc = cardClone.queryselector('#news-desc');

//     newsImg.src = article.ulrTOImage;
//     newsTitle.innerHTML = article.title;
//     newsDesc.innerHTML =article.description;

//     const date = new date (article.publishedAt).toLocalestring("en-us",{
//         timeZome: "Asia/jakarta"
//     });
//     newsSource.innerHTML = `${article.source.name} . $(date)`;

// }
