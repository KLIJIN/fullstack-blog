export const getTags = (tags: string | string[]) => {
  return typeof tags === "string" ? tags.split(", ") : tags;
};
