//const data = []

document.getElementById("search").addEventListener("click", function () {
    const input = document.getElementById("input")
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=${input.value}&limit=25&offset=0&rating=Y&lang=en`).then(response => response.json()).then(data => {
        const dat = data.data
        console.log(dat)
        let html = ""
        for (let i = 0; i < dat.length; i++){
            html += `<tr>
                <td><img src=${dat[i]['images']['480w_still']['url']} style="height: 100px;border-radius: 50px;width: 100px;"/></td>
                <td>${dat[i]['title']}</td>
                <td>${dat[i]['content_url']}</td>
                <td>${dat[i]['source']}</td>
            </tr>`
        }
        document.getElementById("item").innerHTML=html
    })
})
