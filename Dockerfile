FROM node:latest
WORKDIR /usr/src/moisa
COPY ./ ./
RUN npm install
EXPOSE 4200:4200
CMD ["npm", "start"]
