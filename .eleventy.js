module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/grafik");
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};