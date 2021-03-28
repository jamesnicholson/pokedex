FROM node:current-slim
#MAINTAINER James nicholson <jam3s.nicholson@gmail.com>
WORKDIR /apps/pokedex
COPY package.json /apps/pokedex
RUN yarn install
COPY . /apps/pokedex
CMD ["yarn", "start"]