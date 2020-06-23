module.exports = {
  root: true, // 此项是用来告诉eslint找当前配置文件不能往父级查找
  env: { // 此项指定环境的全局变量，下面的配置指定为node环境
    node: true
  },
  extends: [ // 此项是用来配置标准的js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint' // 此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
  },
  // plugins: [ // 此项是用来提供插件的，插件名称省略了eslint-plugin-，下面这个配置是用来规范html的
  //   'html'
  // ],
  rules: {
    "semi": [0],    // 关闭语句强制分号结尾
    "no-mixed-spaces-and-tabs": [0],    //关闭禁止混用tab和空格
    "no-unused-vars": [2, {
      "vars": "local",    // 允许声明未使用变量
      "args": "none"      // 参数不检查
    }],
    "prefer-const": 0,    //首选const
    "comma-dangle": 0, // 对象字面量项尾不能有逗号
    "no-multi-spaces": 0,
    "object-curly-spacing": 0,
    "space-before-function-paren": 0,
    "dot-notation": 0,
    "no-tabs": 0,
    "no-trailing-spaces": 0,
    "comma-spacing": 0,
    "indent": 0,
    "quotes": 0,
    "spaced-comment": 0,
    "space-infix-ops": 0,
    "yoda": 0,
    "lines-between-class-members": 0,
    "quote-props": 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
