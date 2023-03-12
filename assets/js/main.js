var bodyQuery=document.querySelector("body")
fetch("https://api.tvmaze.com/show")
.then(response => response.api())
  .then(data=>{
    data.array.forEach(element => {
      bodyQuery.innerHTML+=`
      <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">${element.img}
  <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text"> ${element.country}</p>
    <p class="card-text"> ${element.language}</p>
    <p class="card-text"> ${element.genres}</p>
    <a href="#" class="btn btn-primary">${element.website}</a>
  </div>
</div>
      `
      
    });

  })
