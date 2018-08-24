const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
const json = require('./webpack/json');

const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common = merge([
	{
		entry: {
			'bundle': PATHS.source + '/bundle/bundle.js',
		},

		output: {
			path: PATHS.build,
			filename: 'js/[name].js'
		},

		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pug/index.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'category.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pug/category.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'fashion.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pug/fashion.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'sale.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pug/sale.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'collection.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pug/collection.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'product-pg.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pug/product-pg.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'cart-page.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pug/cart-page.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'enter.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pug/enter.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'about.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pug/about.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'faq.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pug/faq.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'blog.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pug/blog.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'article.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pug/article.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'how-to-buy.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pug/how-to-buy.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'contact.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pug/contact.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'pay.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pug/pay.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'registration.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pug/registration.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'favorite.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pug/favorite.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'designers.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pug/designers.pug'
			}),
			// new HtmlWebpackPlugin({
			// 	filename: 'blog.html',
			// 	chunks: ['bundle'],
			// 	// chunks: ['index', 'common'],
			// 	template: PATHS.source + '/blog.pug'
			// }),
			// new webpack.optimize.CommonsChunkPlugin({
			// 	name: 'common'
			// }),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery'
			})
		]
	},
	pug(),
	images(),
	fonts(),
	json()
]);

module.exports = function(env) {
	if (env === 'production') {
		return merge([
			common,
			extractCSS(),
			uglifyJS()
		]);
	}
	if (env === 'development') {
		return merge([
			common,
			devserver(),
			sass(),
			css()
		])
	}
};