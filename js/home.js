window.addEventListener("scroll",function(){
      var header = this.document.querySelector("nav");
      header.classList.toggle("black",window.scrollY > 0)
})