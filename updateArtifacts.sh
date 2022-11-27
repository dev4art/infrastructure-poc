#!/bin/sh
docker cp gateway:/var/www/app/package.json ./gateway
docker cp gateway:/var/www/app/package-lock.json ./gateway
docker cp gateway:/var/www/app/node_modules ./gateway