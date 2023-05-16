# Use an official Node.js runtime as the parent image
FROM node:18.16.0

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json file from your local machine to the container
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of your app's source code from your local machine to the container
COPY . .

# Make port 3000 available outside of the container
EXPOSE 3000

# Run server.js when the container launches
CMD ["node", "src/server.js"]