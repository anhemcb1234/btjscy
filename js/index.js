let input = document.querySelector("input")

async function _hanlderApi() {
    try {
        const res = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-02-28&sortBy=publishedAt&apiKey=1f5210480a3d48d487a6e90bd780eadc")
        const data = await res.json()
        let inputValue = input.value;
        const content = document.querySelector(".box")
        let test = await data.articles.filter(x => x.title.includes(inputValue))
        for(let i = 0; i < test.length; i++) {
            contentNode = document.createElement("div")
            contentNode.setAttribute("class", "hihi")
            contentNode.innerHTML = `<div class="col-6"><a href="${test[i].url}" target="_blank"><img class="rounded" src="${test[i].urlToImage}"/></a></div>
                                    <div class="col-6 ms-3"><h1 class="fs-3 fw-bold">${test[i].title}</h1>
                                    <p class="fs-5">${test[i].description}</p></div>`
            _clear(content)
                                    content.appendChild(contentNode)
        }
        
    } catch(e) {
        alert("Loi")
    }
}

        const _clear = (e) => {
            console.log(e)
        }