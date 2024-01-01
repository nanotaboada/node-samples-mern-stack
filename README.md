
# Proof of Concept for a MERN Stack App

## Manifesto

> "Nobody should start to undertake a large project. You start with a small _trivial_ project, and you should never expect it to get large. If you do, you'll just overdesign and generally think it is more important than it likely is at that stage. Or worse, you might be scared away by the sheer size of the work you envision. So start small, and think about the details. Don't think about some big picture and fancy design. If it doesn't solve some fairly immediate need, it's almost certainly over-designed. And don't expect people to jump in and help you. That's not how these things work. You need to get something half-way _useful_ first, and then others will say "hey, that _almost_ works for me", and they'll get involved in the project." — Linus Torvalds

## About

The **MERN Stack** is a popular set of technologies used in web development to build full-stack applications.

It consists of four key technologies:

1. **MongoDB**: A NoSQL database that stores data in a flexible, JSON-like format called BSON (Binary JSON). MongoDB is known for its scalability and ease of integration with applications.

2. **Express.js**: A lightweight and flexible Node.js web application framework that simplifies the process of building robust and scalable web applications. Express.js provides a set of features for building web and mobile applications quickly.

3. **React**: A JavaScript library developed by Facebook for building user interfaces. React is widely used for creating interactive and dynamic user interfaces. It allows developers to build reusable UI components and efficiently update the view when the underlying data changes.

4. **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine. It enables server-side execution of JavaScript code, allowing developers to build scalable and high-performance server applications. Node.js is often used with Express.js to create the backend of MERN Stack applications.

Here's a brief overview of how these technologies work together in the MERN Stack:

- **Frontend**: React is used to build the user interface, and it communicates with the backend to fetch and update data.

- **Backend**: Node.js with Express.js is used to build the server, handle HTTP requests, and interact with the MongoDB database.

- **Database**: MongoDB stores the application's data in a flexible, JSON-like format.

- **Communication**: The frontend and backend communicate using HTTP requests and responses, typically in a RESTful manner. Data is exchanged in JSON format.

The MERN Stack is popular for its flexibility, efficiency, and the ability to use JavaScript throughout the entire development stack, making it easier for developers to work on both the frontend and backend of an application using a single programming language.

## Install

```bash
npm install
```

## Config

This project makes use of the [dotenv](https://github.com/motdotla/dotenv) package for loading environment variables into `process.env`

Make sure to create your `.env` file under the `backend` folder.

```text
/
|__ frontend
|__ backend
    |__ .env
```

```text
PORT='9000'
MONGODB_URI=''
```

## Start (Dev mode)

```bash
npm run dev
```

## Credits

The solution has been coded using [Visual Studio Code](https://code.visualstudio.com/).

## Terms

All trademarks, registered trademarks, service marks, product names, company names, or logos mentioned on this repository are the property of their respective owners. All usage of such terms herein is for identification purposes only and constitutes neither an endorsement nor a recommendation of those items. Furthermore, the use of such terms is intended to be for educational and informational purposes only.
