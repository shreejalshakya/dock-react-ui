# Stage 1
FROM node:lts as build-stage
WORKDIR /code

COPY package*.json /code
RUN npm install

COPY . /code

ARG REACT_APP_API_BASE_URL=http://localhost:80
ENV REACT_APP_API_BASE_URL $REACT_APP_API_BASE_URL
RUN npm run build

# CMD ["npm", "start"]

# Stage 2
FROM nginx:alpine

COPY --from=build-stage /code/build /usr/share/nginx/html
EXPOSE 80

CMD nginx -g 'daemon off;'