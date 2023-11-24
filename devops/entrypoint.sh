#!/bin/bash

# Function to stop the server gracefully
stop_server() {
  echo "Stopping the server..."
  kill -TERM $(cat /var/run/app.pid)
}

# Start the server
npm run dev & echo $! > /var/run/app.pid && wait

# Wait for the server to be started (you might need to adjust the sleep time)
sleep 10

# Perform any shutdown logic you need
stop_server

# Remove the node_modules/.vite/ directory
rm -rf node_modules/.vite/

# Restart the server
npm run dev