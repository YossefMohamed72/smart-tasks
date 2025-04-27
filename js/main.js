var productNameInpt = document.getElementById('productName');
var productPriceInpt = document.getElementById('productPrice');
var productCatagoreInpt = document.getElementById('productCatagore');
var productDescInpt = document.getElementById('productDesc');
var addProduct_btn = document.getElementById('addpr_btn');
var updateProduct_btn = document.getElementById('upppr_btn');


let productContaner = [];

let addProduct=function(){
    let product={
        name:productNameInpt.value,
        price:productPriceInpt.value,
        cat:productCatagoreInpt.value,
        des:productDescInpt.value,
    }
    productContaner.unshift(product)
    // clearForm()
    additem(productContaner)
    localStorage.setItem('vakko',JSON.stringify(productContaner))
    
}
console.log(productContaner)

let clearForm=function(){
    productNameInpt.value=''
productPriceInpt.value=''
productCatagoreInpt.value=''
productDescInpt.value=''
}

let additem=function(arr){
    let item=arr.map((productt,i)=>
        `<tr class='text-uppercase'>
                            <td>${productt.name}</td>
                            <td>${productt.price}</td>
                            <td>${productt.cat}</td>
                            <td>${productt.des}</td>
                            <td><button onclick="updateProduct(${i});" class="btn btn-outline-dark text-uppercase">update </button></td>
                            <td><button onclick="deletProduct(${i});" class="btn btn-outline-danger text-uppercase">delet</button></td>
                        </tr>`).join('')

                        tableBody.innerHTML=item       
}
let deletProduct=function(deletitem){
    productContaner.splice(deletitem,1)
    additem(productContaner)
    localStorage.setItem('vakko',JSON.stringify(productContaner))
}
if(localStorage.getItem('vakko') != null){
    productContaner= JSON.parse(localStorage.getItem('vakko'))
    additem(productContaner)
}
let search_Product=function(Nam){
    let search=[];
    for( var i=0;i<productContaner.length;i++){
        if(productContaner[i].name.toLowerCase().includes(Nam.toLowerCase())==true
         || 
         productContaner[i].cat.toLowerCase().includes(Nam.toLowerCase())==true) 
         {
            search.push(productContaner[i])
            additem(search)
        }
    }
}
let updateIndex = null; 
let updateProduct = function (i) {
    updateIndex = i; 
    productNameInpt.value = productContaner[i].name;
    productPriceInpt.value = productContaner[i].price;
    productCatagoreInpt.value = productContaner[i].cat;
    productDescInpt.value = productContaner[i].des;

    addProduct_btn.classList.replace('d-block', 'd-none');
    updateProduct_btn.classList.replace('d-none', 'd-block');
};

let saveUpdate = function () {
    if (updateIndex !== null) {
        productContaner[updateIndex] = {
            name: productNameInpt.value,
            price: productPriceInpt.value,
            cat: productCatagoreInpt.value,
            des: productDescInpt.value,
        };

        updateIndex = null; 
        additem(productContaner); 
        localStorage.setItem('vakko', JSON.stringify(productContaner)); 
        addProduct_btn.classList.replace('d-none', 'd-block');
        updateProduct_btn.classList.replace('d-block', 'd-none');

        clearForm(); 
    }
};























