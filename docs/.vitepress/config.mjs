// docs/.vitepress/config.mjs
export default {
  title: '我的博客',
  description: '记录学习与思考',
  appearance: true, // 支持暗黑模式切换
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/hello-world' },
    ],
    sidebar: {
      '/posts/': [
        {
          text: '文章列表',
          items: [
            { text: 'Hello World', link: '/posts/hello-world' }
          ]
        }
      ]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025'
    }
  }
}