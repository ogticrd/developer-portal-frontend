FROM node:14-alpine

WORKDIR /app/

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV PORT 80

EXPOSE ${PORT}

ENTRYPOINT ["npm", "start"]