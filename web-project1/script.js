document.addEventListener("DOMContentLoaded", function() {
  let search = document.querySelector("#search");
  let searchBtn = document.querySelector("#searchBtn");
  let condition = true ;

  searchBtn.addEventListener("click", function(){
    if (condition === true) {
      search.style.display = "block";
      condition = false;
    }else{
      search.style.display = "none";
      condition = true;
    }
  });
});
