import express from 'express';
import { getAllUsers, updateUser } from '../controllers/users'
import { isOwner, isAuthenticated } from '../midllewares';
import { deleteUserById } from '../db/users';


export default (router: express.Router) => {

    router.get('/users', isAuthenticated, getAllUsers);
    router.delete('/users:id', isAuthenticated, isOwner, deleteUserById);
    router.delete('/users:id', isAuthenticated, isOwner, updateUser);
}