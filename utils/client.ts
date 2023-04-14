import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "2m2c1y69",
  dataset: "production",
  apiVersion: "2022-11-11",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});