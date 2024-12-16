function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "la la la la la",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let form = document.querySelector("#form");
form.addEventListener("submit", generatePoem);
