function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let apiKey = "59bb440b331f3618c8f63oceca0t0e45";
  let instructionsInput = document.querySelector("#user-instructions");
  let prompt = `User instructions Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to write a 4 lines poem. Make sure to follow the user instructions";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let form = document.querySelector("#form");
form.addEventListener("submit", generatePoem);
