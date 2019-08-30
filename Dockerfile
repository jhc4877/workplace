FROM node:10
WORKDIR /
COPY . .
RUN npm install --silent
EXPOSE 8081
 
CMD npm start
