const matter = require("gray-matter");
const path = require("path");
const fs = require("fs");
const marked = require("marked");
const DOMPurify = require("isomorphic-dompurify");

const readingTime = require("reading-time");

const rootDirectory = path.join(process.cwd(), "content/longforms");

const Image = require("next/image");

//
//
//
const longformMarkedownRenderer = {
  image(href, title, text) {
    console.log(text);
    return `<figure><Image class="longforms-inline-image" src="${href}" alt="${text}" /><figcaption>${text}</figcaption></figure>`;
  },
};

//
//
//
export async function getPostBySlug(slug) {
  const nakedSlug = slug.replace(/\.md$/, "");

  const filePath = path.join(rootDirectory, `${nakedSlug}.md`);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { data, content, isEmpty } = matter(fileContent);

  marked.use({ renderer: longformMarkedownRenderer });

  const cleanedContent = DOMPurify.sanitize(marked.parse(content));

  // Stats
  const stats = readingTime(cleanedContent);

  return { data, content: cleanedContent, isEmpty, stats, slug: nakedSlug };
}

//
//
//
export async function getAllPosts() {
  const filenames = fs.readdirSync(rootDirectory);

  let posts = [];

  filenames.forEach(async (fn) => {
    const post = await getPostBySlug(fn);
    posts.push(post);
  });

  return posts;
}
