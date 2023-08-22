for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var drumInnerHtml = this.innerHTML;
        
        makeSound(drumInnerHtml);
        addAnimation(drumInnerHtml);

    });

    document.addEventListener("keydown",function(thePressedKey){
        makeSound(thePressedKey.key);
        addAnimation(thePressedKey.key)
    })

    function makeSound(pressedKey){
        var playAudio;
        switch (pressedKey) {
            case "w":
                playAudio = new Audio("sounds/tom-1.mp3");
                playAudio.play();    
                break;    
            case "a":
                playAudio = new Audio("sounds/tom-2.mp3");
                playAudio.play();  
                break;    

            case "s":
                playAudio = new Audio("sounds/tom-3.mp3");
                playAudio.play();  
                break;    

            case "d":
                playAudio = new Audio("sounds/tom-4.mp3");
                playAudio.play();  
                break;    

            case "j":
                playAudio = new Audio("sounds/crash.mp3");
                playAudio.play();  
                break;    

            case "k":
                playAudio = new Audio("sounds/kick-bass.mp3");
                playAudio.play();  
                break;  
                
            case "l":
                playAudio = new Audio("sounds/snare.mp3");
                playAudio.play(); 
                break;  

            default:
                playAudio = this.innerHTML;
                break;
        }
    }

    function addAnimation(pressedKey){

        var grabButton = document.querySelector("." + pressedKey);

        grabButton.classList.add("pressed");

        setTimeout(function(){
            grabButton.classList.remove("pressed")
        }, 100);
    }
}
