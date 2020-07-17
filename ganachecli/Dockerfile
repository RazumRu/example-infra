FROM node:12.13-alpine
RUN apk update && apk add python make g++

WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm install ganache-cli
CMD ["ganache-cli", "-h", "0.0.0.0", "--account", "0xa8b702224ec5882aa160931b4fcc0d5a80ff4a6cd58ca1f021e23aac6a1ce8e8,100000000000000000000000000"]
