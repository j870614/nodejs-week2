import { Document } from "mongoose";

export interface IPost extends Document {
  name: string;
  tags: string [];
  type: string;
  image?: string;
  createAt?: Date;
  content: string;
  likes?: number;
  comments?: number;
};
