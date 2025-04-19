const { slug } = require("github-slugger");

const slugify = (content) => {
  if (!content) return null;

  return slug(content);
};