FROM node

ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install -g gulp
RUN npm install

COPY . /usr/src/app

EXPOSE 4300

RUN gulp build
RUN gulp assets


CMD ["npm", "start"]