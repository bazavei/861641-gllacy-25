var link = document.guerySelector("feedback-form");
var popup = document.guerySelector(".write-us");
var close = popup.querySelector(".close-madal");
var login = popup.guerySelector("[name=name]");

link.addEventListener("click",function(evt){
    evt.perentDefault();
    popup.classList.add("modal-show");
    login.focus();
});

close.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.remove("modal-show");
});