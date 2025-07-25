# Use the Node.js 20 image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package files and install frontend dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the frontend code
COPY . .

# Start the React server
CMD ["yarn", "start"]