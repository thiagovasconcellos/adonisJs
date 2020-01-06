# Raffle API - using AdonisJS structure

## Getting started

In order to try things out, you should download this project and start the server on your machine by tiping ```adonis serve --dev```

Set the variables and database (I suggest you to use Docker) and you're good to go.

The features are:
  * Create a new user using the route ```/users```
  * Create a new session by providing a valid username / password on route ```/sessions```
  * Create a new raffle using the route ```/raffles```
  * Buy raffle numbers using the route ```/raffles/lockednumbers```

## Built with

* [AdonisJS](https://adonisjs.com/) - AdonisJs is a Node.js web framework with a breath of fresh air and drizzle of elegant syntax on top of it. We prefer developer joy and stability over anything else.
* [youch](https://github.com/poppinss/youch#readme) - Youch is inspired by Whoops but with a modern design. Reading stack trace of the console slows you down from active development. Instead Youch print those errors in structured HTML to the browser.
* [sentry](https://sentry.io/) - Open-source and hosted error monitoring that helps software teams discover, triage, and prioritize errors in real-time.


## Authors

* **Thiago Vasconcellos**