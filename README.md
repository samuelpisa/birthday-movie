# Discover the movie of your birthdate

Built with AngularJS and using [The Movie DB API].

## Setup

```bash
npm install
```

## Configure The Movie DB key

This app reads the TMDB API key from the `VITE_TMDB_KEY` environment variable at build time (Vite injects it into the bundle).

### Local development

Create a `.env` file in the project root with:

```bash
VITE_TMDB_KEY=your_tmdb_key_here
```

### CI/CD

Set the `VITE_TMDB_KEY` environment variable in your pipeline before running the build step so it is available to `npm run build`.

## Development

```bash
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Tests

```bash
npm test
```

[The Movie DB API]: <https://www.themoviedb.org/documentation/api>
