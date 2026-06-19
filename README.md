# tforge

CLI scaffolding tool that generates Express, Mongoose and EJS project structures from a single terminal command.

## Install

Clone the repository and install globally:

```bash
git clone https://github.com/TarekM-7/tforge.git
cd tforge
npm install
npm install -g .
```

## Usage

```bash
tforge <project-name>
```

### Example

```bash
tforge my-app
```

You will be prompted to choose whether to install dependencies and initialize a Git repository automatically.

## What it generates

```
my-app/
├── views/
│   ├── boilerplate/
│   │   └── boilerplate.ejs
│   └── index.ejs
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js
├── models/
├── routes/
├── seeds/
├── utils/
├── .gitignore
├── index.js
└── package.json
```

The generated project comes with:

- **Express** server wired up and ready to run
- **Mongoose** connected to a local MongoDB database named after your project
- **EJS** with ejsMate for layout support
- **method-override** for PUT and DELETE requests
- A base boilerplate layout in `views/boilerplate/`
- Static files served from `public/`
- A starter route at `/`
- A 404 catch-all handler

## Options

```
tforge --help       Display help information
tforge -h           Display help information
```

## Running the generated project

```bash
cd my-app
npm start
```

Make sure MongoDB is running locally before starting the server.

## Built with

- [Node.js](https://nodejs.org)
- [chalk](https://github.com/chalk/chalk) — terminal colors
- [ora](https://github.com/sindresorhus/ora) — terminal spinner
- [inquirer](https://github.com/SBoudrias/Inquirer.js) — interactive prompts
