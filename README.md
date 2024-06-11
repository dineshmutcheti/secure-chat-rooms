<<<<<<< HEAD
# secure-chat-room
=======
# Secure Chat Room Implementation

## Overview

This project is a secure chat room system built with JavaScript, Node.js, Express, MySQL, and WebSocket (for real-time communication). It includes user authentication, chat room creation, profile viewing, friend requests, and robust security measures.

## Features

1. **User Registration and Authentication**:
   - Users can register with their details and login using JWT for secure authentication.

2. **Chat Room Creation**:
   - Prime members can create chat rooms.
   - Each chat room can have a maximum of 6 participants.

3. **Inviting Participants**:
   - Chat room creators can invite other prime members using a secure token system.

4. **Joining a Room as a Non-Prime Member**:
   - Non-prime members can join one room for free. Additional rooms require 150 coins.

5. **Chat Functionality**:
   - Real-time messaging within chat rooms using WebSocket.

6. **Profile Viewing**:
   - Users can view each other's profiles.

7. **Friend Requests**:
   - Users can send and manage friend requests.

8. **Security Measures**:
   - Passwords are securely stored using bcrypt.
   - Proper input validation and error handling are implemented.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/secure-chat-room.git
   cd secure-chat-room
>>>>>>> 02db330 (sol)
