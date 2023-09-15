FROM node:14 as builder

WORKDIR /app/react-app

COPY  package.json .

RUN npm i

COPY  . .

RUN npm run build

FROM nginx
