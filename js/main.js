const socialMediaBtn = document.getElementById("social-media-btn");
let i = 0;

if (window.matchMedia("(max-width: 430px)").matches) {
    socialMediaBtn.removeAttribute("disabled");
}

socialMediaBtn.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 430px)").matches) {
        if (i === 0) {
            socialMediaPopUp.style.display = "flex"
            i++;
            return;
        }
    
        if (socialMediaPopUp.style.display === "flex") {
            socialMediaPopUp.style.display = "none"
            return;
        }
    }
    socialMediaPopUp.style.display = "flex";
})