import { PortableTextBlock } from "sanity";

export type Page = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  content: PortableTextBlock[];
};
