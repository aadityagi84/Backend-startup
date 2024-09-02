# URL Shortener Application

This is a simple URL Shortener application built using **Node.js** for the backend. The app allows users to shorten long URLs into more manageable links and tracks the visit history for each shortened URL.

## Overview

The URL Shortener application provides a basic API to create short URLs and redirect users to the original URLs when they visit the shortened link. The app also records the time when each shortened URL is accessed.

## Features

- **Create Short URLs**: Convert long URLs into short, easy-to-share links.
- **Redirect to Original URL**: Automatically redirect users to the original URL when they access the short link.
- **Track Visit History**: Store and track the timestamps whenever the short URL is visited.

## Technology Stack

- **Node.js**: The backend of the application is developed using Node.js.
- **MongoDB**: Stores the original URLs, shortened URLs, and visit history.
- **Express.js**: Handles the routing and API endpoints.
- **Postman**: Used for testing the API endpoints during development.

## API Endpoints

1. **Create Short URL**
    - **Method**: `POST`
    - **Endpoint**: `/api/url`
    - **Description**: Accepts a long URL and returns a shortened version.
    - **Request Body**:
      ```json
      {
        "redirectUrl": "https://www.example.com"
      }
      ```
    - **Response**:
      ```json
      {
        "shortId": "abc123",
        "redirectUrl": "https://www.example.com",
        "createdAt": "2024-09-01T12:00:00.000Z",
        "updatedAt": "2024-09-01T12:00:00.000Z"
      }
      ```

2. **Redirect to Original URL**
    - **Method**: `GET`
    - **Endpoint**: `/abc123`
    - **Description**: Redirects the user to the original URL associated with the short ID.

3. **Get Visit History**
    - **Method**: `GET`
    - **Endpoint**: `/api/url/abc123/visits`
    - **Description**: Retrieves the visit history of the short URL.
    - **Response**:
      ```json
      {
        "shortId": "abc123",
        "redirectUrl": "https://www.example.com",
        "visitHistory": [
          "2024-09-01T12:30:00.000Z",
          "2024-09-02T14:00:00.000Z"
        ]
      }
      ```

## How to Use

1. Clone the repository.
2. Install the necessary dependencies using `npm install`.
3. Run the server using `npm start`.
4. Test the API endpoints using Postman or any other API client.

## Conclusion

This URL Shortener application provides a basic yet powerful tool for creating and managing short URLs. With Node.js powering the backend and MongoDB storing the data, it ensures a smooth and efficient experience for users.

