FROM node:16-alpine AS development

RUN apk add --update --no-cache \
    protoc
WORKDIR /var/www/app
RUN npm i -g @nestjs/cli \
    typescript \
    migrate-mongo
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 3000
CMD npm run start:debug