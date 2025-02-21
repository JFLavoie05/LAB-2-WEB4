
async function asyncCard() {
    let message = "";
    try {
        const response = await fetch("http://localhost:3000/blogs/");
        const json = await response.json();
        message = json;
        
        message.forEach(element => {
            document.querySelector(".BlogPost").innerHTML += 
            `<div class="d-flex justify-content-center col-4">
            <div class="card" style="width: 18rem;">
              <img src="images/image card.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="">${element.titre}</h5>
                <p class="card-text">${element.contenu}</p>
              </div>
            </div>
          </div>`
        });
    } catch (error) {
        console.log(error);
    }
}

asyncCard()

