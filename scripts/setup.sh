#!/usr/bin/env bash
set -e
echo "1) copy apps/api_nest/.env.example to .env"
echo "2) install dependencies"
echo "3) cd apps/api_nest && npx prisma generate"
echo "4) build api_nest and worker"
echo "5) bind real indexing backend, semantic ranking, and recommendation systems"
