FROM mhart/alpine-node:12

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/
COPY package.json /usr/src/app/

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
