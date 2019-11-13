FROM mhart/alpine-node:12

RUN mkdir -p /usr/src/app2 

WORKDIR /usr/src/app2
COPY package*.json ./
RUN npm install --production
RUN echo "STEP 1: INSTALL COMPLETED ------>>"
COPY . .
RUN echo "STEP 2: COPY COMPLETED ------>>"
RUN npm run build
RUN echo "STEP 3: BUILD COMPLETED ------>>"

CMD [ "npm", "start" ]

# FROM nginx
# EXPOSE 4000
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /usr/src/app/dist/spa /usr/share/nginx/html
