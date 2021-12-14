# ADONISVELTE

Adonisvelte is a boilerplate with Google authentication and authorization system.
Using AdonisJS, Svelte with Inertia, TailwindCSS with SASS, PostgreSQL,
Redis in Docker Compose.

## Setup

To set up the development environment, firstly you need to install
[Docker Compose](https://docs.docker.com/compose/install/) on your OS.

Copy the example `dot-env` file to use:

```bash
cp .env.example .env
```

Create [OAuth 2.0 credentials](https://console.cloud.google.com/apis/credentials)
for development purpose and set them in `dot-env`.

```dotenv
GOOGLE_CLIENT_ID=xxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=xxxxxxxxxxx
```

## Run

All necessary tools and servers are running with Docker Compose. Before starting,
install dependency packages:

```bash
docker-compose run -u $(id -u):$(id -g) node yarn install
```

To start development server:

```bash
# This won't start as a daemon if you don't pass `-d`
# and allow you to see verbose outputs
docker-compose up
```

To work easy, you can export aliases for your terminal:

```bash
source .aliases
```

## Migrating

If you exported the aliases, you can migrate the database with:

```bash
node ace migration:run
```
