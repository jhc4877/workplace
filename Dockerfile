FROM node:10
WORKDIR /
COPY . .
RUN npm install --silent
EXPOSE 9081
 
CMD npm start
