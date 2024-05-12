 let color = document.querySelector(`#color`);
 let btn = document.querySelector(`.btn`);
  
 
 btn.addEventListener(`click`,()=>{
  
   let red = Math.round(Math.random() * 255) ;
   let green = Math.round(Math.random() * 255) ;
   let blue = Math.round(Math.random() * 255) ;

   color.style.background = `rgb(${red}, ${green}, ${blue})`;

 });
