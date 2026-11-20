module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/posts/*.md").sort((a, b) => a.data.order - b.data.order)
  );
  eleventyConfig.addFilter("tag", (m) => String(m || "").split(" · ")[0]);
  eleventyConfig.addFilter("shortTitle", (s) => String(s || "").replace(/^Buổi \d+ · /, ""));
  eleventyConfig.addFilter("readTime", (html) => {
    const words = String(html || "").replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  });
  return { pathPrefix: "/dropship-shopify/", dir: { input: "src", output: "_site", includes: "_includes" } };
};
