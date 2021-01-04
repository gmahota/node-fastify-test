FROM node:last

# Create app directory
WORKDIR /usr/src/app

EXPOSE 5000

COPY . .

RUN yarn 

CMD ["yarn","start"]