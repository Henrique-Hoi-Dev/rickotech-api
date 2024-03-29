FROM mhart/alpine-node:14

WORKDIR /app

COPY package*.json /app/

RUN npm install

RUN npm run build

COPY . /app/

EXPOSE 3333

CMD [ "yarn", "start" ]