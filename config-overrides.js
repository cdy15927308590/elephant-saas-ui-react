const path = require('path')
const { override, addWebpackAlias } = require('customize-cra')

// 添加 @ 别名
const webpackAlias = addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
})

// 导出要进行覆盖的 webpack 配置
module.exports = override(webpackAlias)
