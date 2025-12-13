FROM node:25.2-alpine3.22

WORKDIR /frontend
COPY . .

RUN npm i
ENTRYPOINT [ "npm", "run", "dev" ]