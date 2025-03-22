// setTimeout(function () {
//   $('.loader-display').fadeOut('slow');
// }, 3000);


document.addEventListener("DOMContentLoaded", function () {
  // Hide the loader when the page is fully loaded
  hideLoader();
});

function hideLoader() {
  $('.loader-display').fadeOut('slow');
}


const toggler = document.querySelector(".btn");
toggler.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});









