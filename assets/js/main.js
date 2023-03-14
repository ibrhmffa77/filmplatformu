var row=document.querySelector('.row')
//$.ajax({
 //method:(GET),
 // url: "https://api.tvmaze.com/show"
//})

fetch('https://api.tvmaze.com/show')
.then(response => response.json())
  .then(data=>{
    data.forEach(element => {
      row.innerHTML+=`
      <div class="col-3 py-3">
      <div class="card " style="width: 18rem;">
  
  <div class="card-body">
  <img src="${element.image.medium}" class="card-img-top" alt="...">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text"> ${element.language}</p>
    <p class="card-text"> ${element.genres}</p>
    <p class="card-text"> ${element.externals.imdb}</p>
    <a href="details.html?id=${element.id}" class="btn btn-primary"> click to watch </a>
  </div>
  </div>
</div>`
      
      
    });

  })

  