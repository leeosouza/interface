function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // if(html.classList.contains("light")){
  // html.classList.remove("light")
  // }else{
  // html.classList.add("light")

  const imagem = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    imagem.setAttribute("src", "./asests/avatar1.png")
    imagem.setAttribute("alt")
  } else {
    imagem.setAttribute("src", "./asests/avatar.png")
    imagem.setAttribute("alt", "imagem dark mode nao encontrada")
  }
}


