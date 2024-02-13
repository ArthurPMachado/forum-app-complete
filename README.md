# Forum app

## A Nest app for users to interact in a Q&A format

The idea behind the project is for users to interact with each other, with the possibility to 
send attachments to their questions to enrich experience

It's also a part of my personal portfolio, which I use to explore DDD, Clean Architecture principles,
Layered Architecture, CloudFare R2 integration and some patterns like: Aggregation and Watched List

## Technologies used

* NodeJS
* NestJS
* Prisma
* CloudFare R2
* JWT
* Vitest + Supertest
* Zod

## Getting Started
### Prerequisites

To run this project, it's necessary to prepare your environment, which means:

1. Install NodeJS 16+ - https://nodejs.org/en
2. Download and install Docker - https://www.docker.com/products/docker-desktop/

### Installing
**Cloning the Repository**
```
$ git clone git@github.com:ArthurPMachado/forum-app-complete.git

$ cd forum-app-complete
```
**Installing dependencies**

```
$ pnpm i
```

### Running Project

**Running migrations**
```
$ pnpm prisma migrate dev
```
**Running application**
```
$ pnpm run dev
```

_or_

```
$ pnpm run prod
```

**To run prod, is necessary to build first using:**

```
$ pnpm run build
```

### Running Tests
**Unit tests**
```
$ pnpm run test
```
⚠️ **DO NOT FORGET TO CREATE A .ENV FILE, OTHERWISE THE PROJECT WILL NOT WORK**

# Author

👤 **Arthur Machado**

- Github: [@Arthur Machado](https://github.com/ArthurPMachado)
- LinkedIn: [@Arthur Machado](https://linkedin.com/in/arthurpmachado)

## Show your support

Give a ⭐️ if this project helped you!
