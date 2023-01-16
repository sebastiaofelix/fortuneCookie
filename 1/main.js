window.onload = function(){

    const screen1 = document.querySelector(".screen1");
    const screen2 = document.querySelector(".screen2");
    
    let randomPhraser
    
    randomPhraser = Math.round(Math.random() * 7);
    
    switch (randomPhraser) {
      case 1:
        document.querySelector(".card2 p").innerText =
          "Às vezes, uma simples frase pode mudar tudo.";
        break;
    
      case 2:
        document.querySelector(".phrase p").innerText =
          "Com sorte você atravessa o mundo, sem sorte você não atravessa a rua.";
        break;
    
      case 3:
        document.querySelector(".phrase p").innerText =
          "A única coisa segura sobre a sorte é que ela mudará.";
        break;
    
      case 4:
        document.querySelector(".phrase p").innerText =
          "A sorte respeita os valentes e oprime os covardes.";
        break;
    
      case 5:
        document.querySelector(".phrase p").innerText =
          "Eu acredito na sorte.";
        break;
    
      case 7:
        document.querySelector(".phrase p").innerText =
          "Uma pessoa não procura a sorte, é a sorte que procura a pessoa.";
        break;
    }
    
    function handleBtn(event) {
        event.preventDefault();
    
        screen1.classList.add("hide");
        screen2.classList.remove("hide");
    
        console.log();
    }
}
