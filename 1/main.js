window.onload = function(){

    const screen1 = document.querySelector(".screen1");
    const screen2 = document.querySelector(".screen2");
    const btn = document.querySelector("#btn");
    const btnA = document.querySelector("#btnA");
    const phrases = document.querySelector("phrasesOfCookie");
    const phrasesOfCookie = [
        "You will have a great day today!",
        "Good things are coming your way!",
        "Expect a positive change in your life soon!",
        "You are loved and appreciated by those around you.",
        "A pleasant surprise is in store for you.",
        "Your hard work will soon be rewarded.",
      ];   
    let xAttempts = 1;
    
    function handleBtn(event)  {
    
        document.querySelector(".screen1").classList.add("hide");
        document.querySelector(".screen2").classList.remove("hide");
    
    }   

    btn.addEventListener('click', () =>{
        phrases.innerText = phrasesOfCookie[Math.round(Math.random() * 5)]
    })



    btn.addEventListener('click', handleBtn)
    btnA.addEventListener('click', function(){
        screen1.classList.remove('hide')
        screen2.classList.add('hide')        
    })

    
    
    console.log(btn)


}
