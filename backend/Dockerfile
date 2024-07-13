# Base image
FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/appdock
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package.json pnpm-lock.yaml ./


# Install app dependencies
RUN npm i -g pnpm
RUN pnpm install --frozen-lockfile

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN pnpm run build

EXPOSE 8000
# Start the server using the production build
CMD [ "node", "dist/main.js" ]
