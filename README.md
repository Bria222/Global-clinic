run dev or yarn dev to start up the server, which will be running on` http://localhost:3500/`.

Next, create a .env file, which will store our environmental variables. Open the terminal and write Node, now, copy and paste the following into the prompt:

`require("crypto").randomBytes(64).toString("hex");`

This will create a unique token for you. Copy the token and in the .env file, create an ACCESS_TOKEN_SECRET=” Unique token goes here”. Next, create another token, and in the .env file, create a REFRESH_TOKEN_SECRET with the unique token.