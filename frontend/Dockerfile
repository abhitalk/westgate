FROM nginx:alpine

# Copy your static content to the NGINX html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run NGINX
CMD ["nginx", "-g", "daemon off;"]