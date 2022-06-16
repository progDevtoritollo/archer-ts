# pull the base image
FROM node:alpine

# set the working direction
# WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# ENV node_modules /app/node_modules/.bin:$PATH

# install app dependencies
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app

# COPY package-lock.json /
COPY build /app

RUN npm install  

# ADD src /app/src
# ADD public /app/public

# RUN npm start build
# RUN npm -s /app/build 
# add app
# EXPOSE 3000 
# start app
# CMD ["npm", "start"]
# CMD ["serve", "-s","build"]

# stage1 - build react app first 

# 2

# FROM node:14-alpine3.15 as build
# WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
# COPY ./package.json /app/
# COPY ./package-lock.json /app/
# RUN npm install
# COPY . /app
# RUN npm run build

# # stage 2 - build the final image and copy the react build files
# FROM nginx:1.21.6-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/conf.d
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]


# 3

# FROM nginx:1.21.6-alpine

# COPY build /usr/share/nginx/html

# #RUN rm /etc/nginx/conf.d/default.conf

# COPY nginx.conf /etc/nginx/nginx.conf

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]