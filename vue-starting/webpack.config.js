
//import
const path = require('path') //node.js 에서 사용할수있는 전역 모듈
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

//export
module.exports = {
    resolve:{
        extensions: ['.js','.vue'],
        // 경로 별칭
        alias:{
            '~': path.resolve(__dirname,'src'),
            'assets': path.resolve(__dirname,'src/assets')
        }
    },
    // 파일을 읽어들이기 시작하는 진입점 설정
    // webpack은 javascript code 로 진입점으로 사용
    entry: './src/main.js',

    // 결과물(번들)을 반환하는 설정
    output: {
        // path: path.resolve(__dirname, 'dist'),   //node.js 에서 필요로하는 절대경로 입력. __dirname:현재파일이 있는 경로.
        // filename: 'main.js',
        clean : true //기존에 있던 파일 지우고 실행
    },

    module: {
        rules:[
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.s?css$/,   // .css 또는 .scss 를 의미
                use: [
                    // 순서 중요!
                    'vue-style-loader',
                    'style-loader', //css 스타일을 html에 삽입해주는 용도
                    'css-loader',    //javascript파일에서 css을 해석하기위한 용도.
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,  //.js
                use:[
                    'babel-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpe?g|gif|webp)$/,
                use:'file-loader'
            }
        ]
    },

    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns : [
                {from: 'static'}
            ]
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        host: 'localhost'
    }
}