import { Router } from 'express';
const router = Router();

import { getPostUser, createPostUser, getPostUserById, deletePostUser, updatePostUser } from '../controllers/user.controller';

router
    .route('/users')
    .get(getPostUser)
    .post(createPostUser);

router
    .route('/:id')
    .get(getPostUserById)
    .delete(deletePostUser)
    .put(updatePostUser);

export default router;
