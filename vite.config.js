const virtualHtml = require('vite-plugin-virtual-html').default

export default {
  root: 'frontend',
  build: {
    outDir: '../dist',
  },
  plugins: [
    virtualHtml({
      pages: {
        index: {
          template: '/template/template.html',
          data: {
            title: 'Test'
          }
        },
      },
      indexPage: 'index',
    }),
  ],
}