#stage1
FROM node:lts-bullseye-slim as build-step
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
#stage2
FROM nginx:stable-alpine-perl
COPY deployment/nginx/nginx-custom.conf /etc/nginx/conf.d/default.conf
COPY --from=build-step /app/dist/deployment-demo /usr/share/nginx/html