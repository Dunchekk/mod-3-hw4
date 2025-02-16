document.addEventListener("mousemove", function(event) {

    let coordin = document.querySelector(".coordinates");
    coordin.textContent = `Координаты: (${event.clientX}, ${event.clientY})`;

});
