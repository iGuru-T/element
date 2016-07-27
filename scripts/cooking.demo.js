var cooking = require('cooking');
var path = require('path');
var Components = require('../components.json');

cooking.set({
  entry: {
    app: './examples/entry.js',
    vendor: ['vue', 'vue-router']
  },
  dist: './examples/element-ui/',
  template: './examples/index.template.html',

  publicPath: '/element-ui/',
  hash: true,
  devServer: {
    port: 8085,
    log: false,
    publicPath: '/'
  },
  chunk: 'vendor',
  extractCSS: true,
  extends: {
    vue: true,
    lint: true,
    saladcss: {
      browser: ['ie > 8', 'last 2 version'],
      features: {
        'bem': {
          'shortcuts': {
            'component': 'b',
            'modifier': 'm',
            'descendent': 'e'
          },
          'separators': {
            'descendent': '__',
            'modifier': '--'
          }
        }
      }
    }
  }
});

cooking.add('loader.md', {
  test: /\.md$/,
  loader: 'vue-markdown-loader'
});

cooking.add('vueMarkdown', {
  use: [
    [require('markdown-it-toc-and-anchor').default, {
      anchorLinkSymbol: '',
      anchorClassName: 'anchor'
    }]
  ],
  preprocess: function (MarkdownIt, source) {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">';
    };
    MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
    return source;
  }
});

var wrap = function (render) {
  return function () {
    return render.apply(this, arguments)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  };
};

cooking.add('resolve.alias', {
  'main': path.join(__dirname, '../src'),
  'packages': path.join(__dirname, '../packages'),
  'examples': path.join(__dirname, '../examples')
});

var externals = {};
Object.keys(Components).forEach(function (key) {
  externals[`packages/${key}/style.css`] = 'null';
});

// 开发模式不需要将不存在的 style.css 打包进去
cooking.add('externals', externals);

cooking.config.vue.loaders.html = 'html?minimize=true&conservativeCollapse=false';

module.exports = cooking.resolve();
