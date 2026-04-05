#!/bin/sh

# Wait for PostgreSQL to be ready
echo "Waiting for PostgreSQL to be ready..."

until nc -z db 5432; do
  sleep 1
done

echo "PostgreSQL is ready!"

# Run migrations, seed, and start the app
npx prisma migrate deploy
node prisma/seed.js
node src/server.js
