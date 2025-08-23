// import express from 'express';
import {get} from './lib/router/_app.js'
import jwt from 'jsonwebtoken'; // For JWT authentication
// const app = express();

const JWT_SECRET ="secret-he-re";
// --- 1. Define the authentication middleware ---
// This function verifies if the user is authenticated (e.g., using JWT)
const authenticateUser = (req, res, next) => {
    // Get the token from the Authorization header (usually "Bearer <token>")
    let token = req.header('Authorization');

    // If no token is provided, return an unauthorized error
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
    if (token && token.startsWith("Bearer ")) {
        token=token.slice(7);
    }
    // Verify the token using your secret key
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            // If the token is invalid or expired, return a forbidden error
            return res.status(403).json({ message: 'Forbidden: Invalid token' });
        }
        // If the token is valid, attach the decoded user information to the request object
        req.user = user; 
        next(); // Pass control to the next middleware or route handler
    });
};

// const authenticateUser = (req, res, next,secret) => {
//     console.log(secret)
//     // Get the token from the Authorization header (usually "Bearer <token>")
//     const token = defaultGetToken(req)

//     // If no token is provided, return an unauthorized error
//     if (!token) {
//         return res.status(401).json({ message: 'Unauthorized: No token provided' });
//     }
//     if (token && token.startsWith("Bearer ")) {
//         token=token.slice(7);
//     }
//     console.log(token)
//     // Verify the token using your secret key
//     jwt.verify(token, secret, (err, user) => {
//         if (err) {
//             // If the token is invalid or expired, return a forbidden error
//             return res.status(403).json({ message: 'Forbidden: Invalid token' });
//         }
//         // If the token is valid, attach the decoded user information to the request object
//         req.user = user; 
//         next(); // Pass control to the next middleware or route handler
//     });
// };


// function defaultGetToken(req) {
//   const auth = req.headers?.authorization;
//   if (auth && auth.startsWith("Bearer ")) return auth.slice(7);
//   if (req.cookies?.token) return req.cookies.token;       // if cookie-parser in use
//   if (req.query?.token) return req.query.token;       // fallback for testing
//   return null;
// }


// --- 2. Define the route and its associated function(s) ---

// Example controller function (the function to execute after authentication)
const getUserData = (req, res) => {
    // Access the authenticated user's information from req.user
    const userId = req.user.id; 
    const username = req.user.username; 

    // Perform operations with the user data or retrieve specific data
    const userData = {
        id: userId,
        username: username,
        // ... more user data from your database or other sources
    };

    res.json({ message: 'Access Granted: User data retrieved', data: userData });
};

// --- 3. Attach the authentication middleware to the GET route ---
get('/secure-profile', authenticateUser, getUserData); 

// Start the server
// listen(3000, () => {
//     console.log('Server is running on port 3000');
// });