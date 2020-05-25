const moment = require("moment")

module.exports = function(eleventyConfig) {

  // Aliases are in relation to the _includes folder
  eleventyConfig.addLayoutAlias('home', 'layouts/home.html')
  eleventyConfig.addLayoutAlias('page', 'layouts/page.html')
  eleventyConfig.addLayoutAlias('post', 'layouts/post.html')
  eleventyConfig.addLayoutAlias('post-index', 'layouts/post-index.html')

  // {{ page.tags | join: ', ' }}
  eleventyConfig.addFilter('join', function (arr, joiner) {
    return arr ? arr.join(joiner) : ''
  })

  // date filter
  eleventyConfig.addFilter('date', function(date, format) {
    return moment(date).format(format);
  })

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  // Copy the directory to the compiled site folder
  eleventyConfig.addPassthroughCopy('assets')

  // Copy favicon assets to _site root
  eleventyConfig.addPassthroughCopy({ "assets/favicon/*.*": "." });

  return {
    dir: {
      input: "./",      // Equivalent to Jekyll's source property
      output: "./_site", // Equivalent to Jekyll's destination property

      "permalink": "/:year/:month/:day/:title/",
      "defaults": [
        {
          "scope": {
            "path": "",
            "type": "posts"
          },
          "values": {
            "layout": "post",
            "author": "joesepi"
          }
        }
      ]
    }
  }
}
