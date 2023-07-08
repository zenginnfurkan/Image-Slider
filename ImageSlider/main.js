(function () {
    const pictures = [
        "1",
        "2",
        "3",
        "4",
    ];

    const buttons = document.querySelectorAll(".btn");
    const imgDiv = document.querySelector(".img-container");

    let counter = 0;

    buttons.forEach(function(button){
        button.addEventListener("click", function(event){
            if(button.classList.contains('btn-left')) {
                counter--;
                if(counter < 0) {
                    counter = pictures.length - 1;
                }
                imgDiv.style.opacity = 0;
                setTimeout(function() {
                    imgDiv.style.opacity = 1;
                    imgDiv.style.background = `url('img/${pictures[counter]}.jpg') center center / cover no-repeat`;
                }, 500);
            }
            if(button.classList.contains('btn-right')) {
                counter++;
                if(counter > pictures.length - 1) {
                    counter = 0;
                }
                imgDiv.style.opacity = 0;
                setTimeout(function() {
                    imgDiv.style.opacity = 1;
                    imgDiv.style.background = `url('img/${pictures[counter]}.jpg') center center / cover no-repeat`;
                }, 500);
            }
        })
    })
})();
