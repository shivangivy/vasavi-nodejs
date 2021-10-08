import { Request, Response } from 'express';

import { connect } from '../database';
import { Post } from '../interface/Post';

export async function getPostUser(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const courses = await conn.query('SELECT * FROM users');
    return res.json(courses[0]);
}
export async function createPostUser(req: Request, res: Response) {
    const newPost: Post = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO users SET ?', [newPost]);
    return res.json({
        message: 'Post Created'
    });
}
export async function getPostUserById(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const conn = await connect();
    const post = await conn.query('SELECT * FROM users WHERE id = ?', [id]);
    return res.json(post[0]);
}

export async function deletePostUser(req: Request, res: Response) {
    const id = req.params.id;
    const conn = await connect();
    await conn.query('DELETE FROM users WHERE id = ?', [id]);
    return res.json({
        message: 'Post deleted'
    });
}
export async function updatePostUser(req: Request, res: Response) {
    const id = req.params.id;
    const updatePost: Post = req.body;
    const conn = await connect();
    await conn.query('UPDATE users SET ? WHERE id = ?', [updatePost, id]);
    return res.json({
        message: 'Post updated'
    });
}
