FROM node:14 as builder

WORKDIR /app

COPY  package.json .

RUN npm i

COPY  . .

RUN npm run build

FROM nginx
