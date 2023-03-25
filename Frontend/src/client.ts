import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.REACT_APP__SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-03-25",
  token: process.env.REACT_APP__SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
