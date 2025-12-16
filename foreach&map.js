
let productsdata = [
    {
      title : "Mobile",
      Image : "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhw_vC4WhaZIRQhJBPhhj713o1gzLh8BGgATHZUMYuXh6fAsWNJW6empqjKCtmBWF3t6cA7dh61YW9qKSa3Ik-y1x2Ulo_7OiQ4U_Sp8O8tp38CbLyf3PcZqI",
      desccription : "Smartphones with 4GB RAM and 64GB storage",
      price : 10000
    },
    {
      title : "Laptop",
      Image : "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/d/s/x/-original-imahg5ftu2dzvyu8.jpeg?q=70",
      desccription : "Laptops with 8GB RAM and 512GB SSD",
      price : 50000
    },
    {
        title : "Headphones",
        Image : "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/r/0/i/-original-imahf77wchexagzp.jpeg?q=70",
        desccription : "Wireless headphones with noise cancellation",
        price : 3000
      },
    {
        title : "Smartwatch",
        Image : "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/o/c/a/-original-imah76jszpjhp2yr.jpeg?q=70",
        desccription : "Smartwatches with fitness tracking features",
        price : 7000
      },
    {
        title : "Tablet",
        Image : "https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/v/4/h/-original-imagu5gbhgbjqvh6.jpeg?q=70",
        desccription : "Tablets with 10-inch display and 128GB storage",
        price : 20000
      }
  ]

  let div = document.getElementById("container");
//   function displayProducts(){
//     productsdata.forEach((value)=>{
//         div.innerHTML += `<div id="cards">
//         <h1>${value.title}</h1>
//         <p>${value.desccription}</p>
//         <mark>${value.price}</mark>
//     </div>`
//     })
//   }
//   displayProducts(productsdata);

//Map

function displayProducts(){
    let b= productsdata.map((value)=>{
        return 
        `<div id="cards">
        <h1>${value.title}</h1>
        <img src="${value.Image}" alt="${value.title}"/>
        <p>${value.desccription}</p>
        <mark>${value.price}</mark>
    </div>`
    })
    div.innerHTML += b.join("");  // join() is used to convert array to string,it will remove the commas
  }
  displayProducts(productsdata);