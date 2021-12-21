var links = [...document.getElementsByClassName("link-item")]
links.forEach(link=>{
  link.addEventListener("mouseover",()=>{
    animatorbg.style.left = link.offsetParent.offsetLeft + "px"
    
  })
  link.addEventListener("mouseleave",()=>{
    animatorbg.style.left = "100vw"
  })
})