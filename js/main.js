let rowData = document.querySelector(".row");
let links = document.querySelectorAll("nav ul li");


for (const link of links) {
    link.addEventListener("click", function () {
        // console.log(this.getAttribute("data-countryCode"));
        getNews(this.getAttribute("data-countryCode"))
    });
  }


  let allData;
  function getNews(countryCode) {
    let myHttp = new XMLHttpRequest();
    myHttp.open(
      "get",
      `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=business&apiKey=ab692e9e5da04a2eb9e6f46b68940af7`
    );
    myHttp.send();
    myHttp.addEventListener("readystatechange", function () {
      if (this.readyState == 4) {
        allData = JSON.parse(this.response).articles;
        displayData();
      }
    });
}

function displayData() {
    let cartona = '';
  for (const data of allData) {
    cartona+=`
    <div class="col-md-4">
        <div class="news shadow border-1 rounded-2 p-3 text-center">
            <img class="w-100" src="${data.urlToImage == null ? 'https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png': data.urlToImage}"></img>
            <div>${data.title}</div>
            <div>${data.description}</div>
        </div>
    </div>
    `
  }
rowData.innerHTML=cartona;
}
