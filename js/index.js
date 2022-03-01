//scroll down animation
function reveal(){
    var reveals = document.querySelectorAll(".reveal");

    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 20;
        
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);

    // to disable image save
    $(document).ready(function(){
        $('img').on('dragstart', function(event){event.preventDefault(); });
            $("body").on("contextmenu", "img", function(e){
                return false;
            });
    });