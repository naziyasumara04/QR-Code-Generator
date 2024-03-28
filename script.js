let btn = document.querySelector("#btn");
let qrCode = document.querySelector("#qrCode");
let img = document.querySelector("#code-img");

// btn.addEventListener("click", (event) => {
//     event.preventDefault(); 
//     let input = document.querySelector("#input");
    
//     let api=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    
//     img.src=api;
// });


btn.addEventListener("click", (event) => {
    let input = document.querySelector("#input");
    event.preventDefault();
    if(input.value==" "){
        img.style.display="none";
    }else{
     // Prevent default form submission behavior
    
    // console.log(input.value);
    let api=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    // console.log(api);
    img.src=api;
    }
});