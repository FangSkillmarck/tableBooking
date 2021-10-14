# Exercise 01

This task is about handling form data.

## What does this application do?

This application serves a document with an HTML form on [root](http://localhost:8080). The form performs a `POST` to [/submit](http://localhost:8080/submit), which then prints what's posted.

The application is a simple booking form for a restaurant where guests can book a table in the restaurant's opening hours.

## What is the task?

For the scope of this exercise, the given server just prints the submitted form, but you can assume that what's posted in the form goes into a database where the restaurant can retrieve bookings with an admin system.

In this task you shall:

 * Improve the form so it's semantically better and accessible.
 * Add input validation.
 * Make it so that the user gets clear warnings if some fields have wrong values when submitting.
 * Make it so that the user gets clear warnings if required fields are missing when submitting.
 * Make it so that if the user wants to arrive at for example 14:00, (s)he cannot select any time before 14:00 in the departure field.
 * Make it so that if the user closes the form page and opens it again, what's previously written and not submitted to the server is restored in the form.
 * Add necessary security measurements to the process.

You can:

 * Use any library or framework of your choice on the server-side of this application.
 * Add any dependencies and script commands etc. you need to `package.json`
 * Add a front-end build tool to assemble code into `/static/script.js` and `/static/styles.css`.

You shall __not__:

 * Use any libraries or frameworks in the front-end code (the code that runs in the browser).
 * Replace the existing HTTP server with an HTTPS server. Assume that something is terminating SSL in front of it.
 * Implement any type of server-side storage.
 * Think about mobile.

## How to run

Assuming you have Node.js installed, install the dependencies:

```sh
npm install
```

Then run the application:

```sh
npm start
```

## How to return the exercise

Please make changes to the exercise in a way so we can run `npm install` followed by `npm start` or `npm test` to see the exercise running.

Before returning the exercise, remove the `node_modules` folder and any other temporary files. Pack the whole exercise folder in a `.zip` or `.tar` file and mail it back to your contact.

__Do not__ upload the exercise to any public space such as GitHub.
