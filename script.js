// var listProducts = [
//     {
//         id: 1,
//         img: 'img/products/f1.jpg',
//         brand: 'adidas',
//         name: 'Cartoon One T-shirts',
//         rate: 5,
//         price: 78,
//     },
//     {
//         id: 2,
//         img: 'img/products/f2.jpg',
//         brand: 'adidas',
//         name: 'Cartoon Two T-shirts',
//         rate: 5,
//         price: 100,
//     },

//     {
//         id: 3,
//         img: 'img/products/f3.jpg',
//         brand: 'adidas',
//         name: 'Cartoon Three T-shirts',
//         rate: 5,
//         price: 120,
//     },

//     {
//         id: 4,
//         img: 'img/products/f4.jpg',
//         brand: 'adidas',
//         name: 'Cartoon Four T-shirts',
//         rate: 5,
//         price: 120,
//     },

//     {
//         id: 5,
//         img: 'img/products/f5.jpg',
//         brand: 'adidas',
//         name: 'Cartoon Five T-shirts',
//         rate: 5,
//         price: 120,
//     },

//     {
//         id: 6,
//         img: 'img/products/f6.jpg',
//         brand: 'adidas',
//         name: 'Cartoon six T-shirts',
//         rate: 5,
//         price: 120,
//     },

//     {
//         id: 7,
//         img: 'img/products/f7.jpg',
//         brand: 'adidas',
//         name: 'Cartoon Seven T-shirts',
//         rate: 5,
//         price: 105,
//     },

//     {
//         id: 8,
//         img: 'img/products/f8.jpg',
//         brand: 'adidas',
//         name: 'Cartoon Nine T-shirts',
//         rate: 5,
//         price: 120,
//     },

//     {
//         id: 9,
//         img: 'img/products/n1.jpg',
//         brand: 'adidas',
//         name: 'Cartoon TenT-shirts',
//         rate: 5,
//         price: 120,
//     },

//     {
//         id: 10,
//         img: 'img/products/n2.jpg',
//         brand: 'adidas',
//         name: 'Cartoon Astronaut T-shirts',
//         rate: 5,
//         price: 120,
//     },

//     {
//         id: 11,
//         img: 'img/products/n3.jpg',
//         brand: 'adidas',
//         name: 'Cartoon Astronaut1 T-shirts',
//         rate: 5,
//         price: 110,
//     },

//     {
//         id: 12,
//         img: 'img/products/n4.jpg',
//         brand: 'adidas',
//         name: 'Cartoon Astronaut2 T-shirts',
//         rate: 5,
//         price: 60,
//     }
// ];
// let html = ``
// let detailElement = document.getElementsByClassName('pro-container')[0];
// console.log(detailElement);
// listProducts.map(function (product) {
//     return html += `
   
//     <div class="pro" >
//                 <img src="${product.img}" alt="">
//                 <div class="des">
//                     <span>Adidas</span>
//                     <h5>${product.name}</h5>
//                     <div class="star">
//                         <i class="fas fa-star"></i>
//                         <i class="fas fa-star"></i>
//                         <i class="fas fa-star"></i>
//                         <i class="fas fa-star"></i>
//                         <i class="fas fa-star"></i>
//                     </div>
//                     <h4>${product.price}$</h4>
//                 </div>
//                 <a href="#"><i class="fas fa-shopping-cart cart"></i></a>
//             </div>
//         `})
// detailElement.innerHTML = html;


// // phần product sản phẩm
// var MainImg = document.getElementById("MainImg");
// var small_img = document.getElementsByClassName("small-img");
// small_img[0].onclick = function () {
//     MainIng.src = small_img[0].src;
// }
// small_img[1].onclick = function () {
//     MainIng.src = small_img[1].src;
// }
// small_img[2].onclick = function () {
//     MainIng.src = small_img[2].src;
// }
// small_img[3].onclick = function () {
//     MainIng.src = small_img[3].src;
// }

// // console.log(MainIng.src);