Color Scheme Generator

I developed this solo project to master Asynchronous JavaScript and REST API integration during Scrimba Fron-End path. It allows users to pick a seed color and generate a professional palette by fetching data from a external Color API.

Technical Highlights

Implemented fetch requests to a REST API, handling JSON responses and error states to ensure a smooth user experience.  

Developed logic to map API response objects into a dynamic UI using template literals and modular CSS Grid layouts.

UIntegrated the Navigator Clipboard API to allow users to instantly copy HEX codes with visual "Copied!" feedback.

Used a centralized event listener on the document to handle both the generation trigger and the copy-to-clipboard functionality, optimizing memory efficiency.

Engineering Challenges

Ensuring the UI remained consistent while waiting for data from the external API. I solved this by implementing loading states and clear error messaging for the user.

To interface correctly with the API, I developed a utility to strip the # symbol from the input value, ensuring the URL parameters remained valid.

Tech Stack

HTML5
CSS3
JavaScript(ES6+)
REST API
GITHUB

How to run this project

1. Clone the repository: Bash git clone https://github.com/Eric-Ochir/[repository-name].git

2. Install dependencies: Bash npm install

3. Launch the development server: Bash npm run dev

4. Build for production: Bash npm run build

Author
Erdene-Ochir Ochirgarav 
