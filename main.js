let back = document.getElementById('back');
let next = document.getElementById('next');

let show = document.getElementById('show');
let submit = document.getElementById('submit');

products =[];

submit.addEventListener("click", function(){
    show.innerHTML=``

    let sel1 = +document.getElementById('sel1').value - 1;
    let sel2 = +document.getElementById('sel2').value - 1;

    if(products.length > 0){
        renderData(sel1,sel2,products);
    }else{
        fetch("https://fakestoreapi.com/products").then(res => res.json()).then(data =>{
            product = data;
            renderData(sel1,sel2,data);
        })
    }
})

function renderData(sel1,sel2,data){
    for (let i = sel1; i <= sel2 ; i++){
        let item = data[i];

        show.innerHTML +=`
                    <div class="card" style="width: 18rem;">
                        <img src=${item.image} class="card-img-top" alt="...">
                        <div class="card-body">
                            <p>${item.id}</p>
                            <h5 class="card-title">${item.title}</h5>
                        </div>
                    </div>`
    }
}

