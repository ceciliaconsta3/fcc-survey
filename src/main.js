/* TODO: Unwrap from doc ready - script moved in markup */
document.addEventListener("DOMContentLoaded", = (event) => {
    document.getElementById("start").addEventListener("click", startSurvey);
});

const startSurvey  = () => {
    document.getElementById("form-intro").style.display = "none";
    document.getElementById("form-slide-1").style.display = "block";
}

const createContinueBtn = () => {
    let continueBtn = document.createElement("BUTTON");
    continueBtn.setAttribute("class","continue");
    continueBtn.setAttribute("type","button");
    continueBtn.textContent = "Continue"; 
    return continueBtn;
}

const checkOnChange = slide => {
    let currentSlide = slide;
    let currentContinueBtn = createContinueBtn();
    if ( currentSlide.getElementsByTagName("button").length > 0 ) {
        return currentSlide;
    } else {
        currentSlide.append(currentContinueBtn);
    }
    nextQuestion(currentSlide, currentContinueBtn);
}

const nextQuestion = (currentSlide, currentContinueBtn) => {
    const questionSlides = document.querySelectorAll("form div[id*=slide]");
    currentContinueBtn.addEventListener("click", function(){
        document.getElementById("progressBar").value++;
        for (let i = 0; i < questionSlides.length-1; i++) {
            if ( currentSlide.style.display === "block" && currentSlide == questionSlides[i] ) {
                currentSlide.style.display = "none";
                questionSlides[i+1].style.display = "block";
                currentSlide = questionSlides[i+1];
                break;
            }
        };
    }); 
}

