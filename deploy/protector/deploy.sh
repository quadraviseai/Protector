#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/var/www/protector-app"
LIVE_DIR="/var/www/protector"
BRANCH="master"

if [ ! -d "$APP_DIR/.git" ]; then
  echo "Missing git checkout at $APP_DIR" >&2
  exit 1
fi

cd "$APP_DIR"
git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"

cd "$APP_DIR/ERP_01"
npm ci
npm run build

mkdir -p "$LIVE_DIR"
rsync -a --delete dist/ "$LIVE_DIR/"
chown -R www-data:www-data "$LIVE_DIR"

echo "Protector deployed from origin/$BRANCH"
