module.exports = {
  plugins: [
  	require('autoprefixer')({ browsers: ['> 2%', 'IE 9']})
    ,require('cssnano')
    ,require('postcss-zindex')
    //css stats breaks map
    //,require('postcss-cssstats')
    ,require('stylelint')
  ]
}