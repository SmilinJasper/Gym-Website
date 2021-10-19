FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY  . .
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci && npm run build


FROM nginx:alpine

#!/bin/sh

COPY nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=ui-build /usr/src/app/build/ /usr/share/nginx/html

EXPOSE 80 5000

ENTRYPOINT ["nginx", "-g", "daemon off;"]