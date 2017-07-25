var config = {
   entry: './src/index.js',
	
   output: {
      path:'./',
      filename: 'bundle.js',
   },
	
   devServer: {
      inline: true,
      port: 3333
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
            
         }
        ,{test: /(\.css)$/, loaders: ['style-loader', 'css-loader']}
      ]
   }
}

module.exports = config;