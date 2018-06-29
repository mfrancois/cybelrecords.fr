FROM node:10

# Create app directory
RUN mkdir -p /var/www/html
WORKDIR /var/www/html

# Bundle app source
COPY . /var/www/html


RUN npm install
ENV NODE_ENV production
RUN npm run build
CMD ['npm','run','serve']