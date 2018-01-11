# Cats Forever

This a sample application for testing infrastructure and stuff. It can also be used as a boilerplate for very simple Express apps.

## What Does it Do?

It returns a webpage that displays a random photo of a cat. There's also a fallback to catch invalid routes.

## Installation and Usage

Clone the repo to a location of your choosing:

  ```
  git clone https://github.com/pbzona/cats-forever.git
  ```

Go navigate into the directory:

  ```
  cd cats-forever
  ```

Install dependencies:

  ```
  npm install
  ```

Start the server:

  ```
  npm start
  ```

By default, the server listens on port 3000. This can be changed in the `index.js` file. To run in "production," you should proxy web requests from port 80 or 443 to the Express port with the web server.
