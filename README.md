This code generates and displays a poem based on user instructions.

Functions:
displayPoem(response): This function takes an API response containing the generated poem and uses the Typewriter library to display it character by character with a typing effect.
generatePoem(event): This function handles the form submission event.
It retrieves the user's instructions from the input field.
It constructs a prompt and context for the poem generation API call.
The prompt specifies that the user wants a short, romantic poem based on their instructions.
The context informs the AI model that it should act as a romantic poem expert aiming to write a 4-line poem following the user's instructions.
It builds the API URL using the user's prompt, context, and an API key.
It uses Axios to make a GET request to the API and then calls the displayPoem function with the response data (containing the generated poem).
Event Listener: The code adds an event listener to the form element.
When the user submits the form, the generatePoem function is triggered, initiating the poem generation process.
