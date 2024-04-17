function generateMovie(event) {
    event.preventDefault();

    new Typewriter('#movie', {
        strings: "Poor Things",
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

let movieFormELement = document.querySelector("#movie-generator-form");
movieFormELement.addEventListener("submit", generateMovie);