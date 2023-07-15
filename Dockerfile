FROM node:18.16-alpine3.18 AS builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:stable-alpine3.17-slim

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]