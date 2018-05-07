# Testing Angular with Cypress and Docker

## Want to learn how to build this project?

Check out the [blog post](https://testdriven.io/testing-angular-with-cypress-and-docker).

## Want to use this project?

### With Docker

Build the images and spin up the containers:

```sh
$ docker-compose up -d --build
```

Run the tests:

```sh
$ docker-compose run cypress ./node_modules/.bin/cypress run \
    --config baseUrl=http://127.0.0.1
```

### Without Docker

Install dependencies:

```sh
$ npm install
```

Run the development server:

```sh
$ ng serve
```

Run cypress in a new terminal window:

```sh
$ ./node_modules/.bin/cypress open
```
