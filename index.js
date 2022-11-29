import express from "express";
import cors from 'cors';
import { userLogin, addNewUser, updateUsers } from "./src/user.js";
import { isUserReallyUser } from '.src/middleware.js'

const PORT = 3030

const app = express()
app.use(cors())
app.use(express.json())

app.post('/login', userLogin)
app.post('/users', addNewUser)
app.patch('/users/:uid', isUserReallyUser, updateUsers)

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}` ))