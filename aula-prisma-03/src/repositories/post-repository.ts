import { Post } from "@prisma/client";
import prisma from "../database/database";

const TABLE_NAME = "posts";

export type CreatePost = Omit<Post, "id">;

async function getPosts() {
  const result = await prisma.post.findMany();
  return result;
}

async function getPost(id: number) {
  const result = await prisma.post.findUnique({ where: { id: id } });
  return result;
}

async function createPost(post: CreatePost) {
  const result = await prisma.post.create({ data: post });

  return result; // Ou zero??
}

async function deletePost(id: number) {
  const result = await prisma.post.delete({ where: { id: id } });
  return result; // Ou 0??
}

const postRepository = {
  getPost,
  getPosts,
  createPost,
  deletePost,
};

export default postRepository;
