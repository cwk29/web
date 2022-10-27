import { Category } from "./Category";
import { Comment } from "./Comment";

type Section = {
  title: string;
  content: string[];
};
export interface Blog {
  id: string;
  title: string;
  date: string;
  author: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  sections: Section[];
  comments: Comment[];
  related: string[];
}
