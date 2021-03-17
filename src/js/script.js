var concat = require("concat")

concat([
  'node_modules/jquery/dist/jquery.js',
  'node_modules/owl.carousel/dist/owl.carousel.js',
  'src/js/app.js'
], 'dist/script.js')