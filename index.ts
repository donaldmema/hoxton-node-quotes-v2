import express from "express";
import cors from "cors";
import { Author, authorsData, Quote, quotesData } from "./data";

let quotes = quotesData;
let authors = authorsData;

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());

function getRandom(listEl: any[]) {
  return listEl[Math.floor(Math.random() * listEl.length)];
}

function findQuoteAuthor(quote: Quote) {
  let author = authors.find((author) => author.id === quote.authorId);
  return author;
}

function findAuthorQuotes(authorId: number) {
  return quotes.filter((quote) => quote.authorId === authorId);
}

app.get("/quotes/random", (req, res) => {
  let randomQuote: Quote = getRandom(quotes);
  let randomQuoteAuthor = findQuoteAuthor(randomQuote);

  let finalQuote = { ...randomQuote, author: randomQuoteAuthor };
  res.send(finalQuote);
});

app.get("/quotes", (req, res) => {
  let quotesToSend = quotes;

  if (req.query.includeAuthor === "true") {
    quotesToSend = quotes.map((quote) => {
      let author = findQuoteAuthor(quote);
      return { ...quote, author };
    });
    res.send(quotesToSend);
  } else res.send(quotesToSend);
});

app.get("/quotes/:id", (req, res) => {
  let quote = quotes.find((quote) => quote.id === Number(req.params.id));
  if (!quote) res.status(404).send({ error: "Quote not found!" });
  else {
    let author = findQuoteAuthor(quote);
    let finalQuote = { ...quote, author };
    res.send(finalQuote);
  }
});

app.post("/quotes", (req, res) => {
  let errors: string[] = [];

  if (!req.body.text) errors.push("Text is required!");
  if (typeof req.body.text !== "string") errors.push("Text must be a string!");

  let quoteText = req.body.text;
  let match = quotes.find((quote) => quote.text === quoteText);
  if (match) errors.push("Quote already exists!");

  if (!req.body.authorId) errors.push("Author ID is required!");
  if (typeof req.body.authorId !== "number")
    errors.push("Author ID must be a number!");

  let authorId = req.body.authorId;
  let author = authors.find((author) => author.id === authorId);
  if (!author) errors.push(`Author with id:${authorId} not found!`);

  if (errors.length > 0) res.status(400).send({ errors });
  else {
    let newQuote: Quote = {
      id: quotes.length === 0 ? 1 : quotes[quotes.length - 1].id + 1,
      text: req.body.text,
      authorId: req.body.authorId,
    };
    quotes.push(newQuote);
    res.send(newQuote);
  }
});

app.patch("/quotes/:id", (req, res) => {
  let id = Number(req.params.id);
  let quoteMatch = quotes.find((quote) => quote.id === id);
  if (!quoteMatch) res.status(404).send({ error: "Quote not found!" });
  else {
    let errors: string[] = [];

    if (req.body.text) {
      if (typeof req.body.text !== "string")
        errors.push("Text must be a string!");
      else quoteMatch.text = req.body.text;
    }

    if (req.body.authorId) {
      if (typeof req.body.authorId !== "number")
        errors.push("Author ID must be a number!");
      if (!authors.find((author) => author.id === req.body.authorId))
        errors.push(`Author with id:${req.body.authorId} not found!`);
      if (errors.length > 0) res.status(400).send({ errors });
      else quoteMatch.authorId = req.body.authorId;
    }
  }

  res.send(quoteMatch);
});

app.delete("/quotes/:id", (req, res) => {
  let id = Number(req.params.id);
  let quoteIndex = quotes.findIndex((quote) => quote.id === id);

  if (quoteIndex > -1) {
    quotes = quotes.filter((quote) => quote.id !== id);
    res.send({ message: "Quote deleted!" });
  } else res.status(404).send({ error: "Quote not found!" });
});

app.get("/authors", (req, res) => {
  let authorsToSend = authors;

  if (req.query.includeQuotes === "true") {
    authorsToSend = authors.map((author) => {
      let authorQuotes = findAuthorQuotes(author.id);
      return { ...author, quotes: authorQuotes };
    });
    res.send(authorsToSend);
  } else res.send(authorsToSend);
});

app.get("/authors/:id", (req, res) => {
  let author = authors.find((author) => author.id === Number(req.params.id));
  if (!author) res.status(404).send({ error: "Author not found!" });
  else {
    let authorQuotes = findAuthorQuotes(author.id);
    let finalAuthor = { ...author, quotes: authorQuotes };
    res.send(finalAuthor);
  }
});

app.post("/authors", (req, res) => {
  let errors: string[] = [];

  if (!req.body.age) errors.push("Age is required!");
  if (typeof req.body.age !== "number") errors.push("Age must be a number!");

  if (!req.body.firstName) errors.push("Name is required!");
  if (typeof req.body.firstName !== "string")
    errors.push("Name must be a string!");

  if (!req.body.lastName) errors.push("Surname is required!");
  if (typeof req.body.lastName !== "string")
    errors.push("Surname must be a string!");

  if (!req.body.photoUrl) errors.push("Photo URL is required!");
  if (typeof req.body.photoUrl !== "string")
    errors.push("Photo URL must be a string!");

  let authorFirstName = req.body.firstName;
  let authorLastName = req.body.lastName;
  let match = authors.find(
    (author) =>
      author.firstName === authorFirstName && author.lastName === authorLastName
  );
  if (match) errors.push("Author already exists!");

  if (errors.length > 0) res.status(400).send({ errors });
  else {
    let newAuthor: Author = {
      id: authors.length === 0 ? 1 : authors[authors.length - 1].id + 1,
      age: req.body.age,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      photoUrl: req.body.photoUrl,
    };
    authors.push(newAuthor);
    res.send(newAuthor);
  }
});

app.patch("/authors/:id", (req, res) => {
  let id = Number(req.params.id);
  let authorMatch = authors.find((author) => author.id === id);
  if (!authorMatch) res.status(404).send({ error: "Author not found!" });
  else {
    let errors: string[] = [];

    if (req.body.age) {
      if (typeof req.body.age !== "number")
        errors.push("Age must be a number!");
      else authorMatch.age = req.body.age;
    }

    if (req.body.firstName) {
      if (typeof req.body.firstName !== "string")
        errors.push("Name must be a string!");
      else authorMatch.firstName = req.body.firstName;
    }

    if (req.body.lastName) {
      if (typeof req.body.lastName !== "string")
        errors.push("Surname must be a string!");
      else authorMatch.lastName = req.body.lastName;
    }
    if (req.body.photoUrl) {
      if (typeof req.body.photoUrl !== "string")
        errors.push("Photo URL must be a string!");
      else authorMatch.photoUrl = req.body.photoUrl;
    }
    if (errors.length > 0) res.status(400).send({ errors });
    else res.send(authorMatch);
  }
});

app.delete("/authors/:id", (req, res) => {
  let id = Number(req.params.id);
  let authorIndex = authors.findIndex((author) => author.id === id);

  if (authorIndex > -1) {
    authors = authors.filter((author) => author.id !== id);
    res.send({ message: "Author deleted!" });
  } else res.status(404).send({ error: "Author not found!" });

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
