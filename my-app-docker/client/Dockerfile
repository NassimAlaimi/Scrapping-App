FROM node:17-alpine

WORKDIR /usr/app

COPY package.json .
RUN npm install

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

EXPOSgE 3000

CMD ["npm", "run", "start"]
