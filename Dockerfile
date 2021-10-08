# pull official base image
FROM node:14-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci

# add app
COPY . ./

# run app on 
EXPOSE 8080:80

# start app
CMD ["npm", "start"]
