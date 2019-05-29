import path from 'path'
// Rollup plugins
import babel from 'rollup-plugin-babel'
// import { eslint } from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
// import memory from 'rollup-plugin-memory'

const pkgName = 'simple-resize'
const pkg = {
  all: `dist/${pkgName}.js`,
  main: `dist/${pkgName}.cjs.js`,
  module: `dist/${pkgName}.esm.js`,
  browser: `dist/${pkgName}.umd.js`,
}

export default {
  input: 'src/lib/simple-resize.js',
  output: {
    name: 'window',
    // moduleName: 'window',
    file: pkg.all,
    sourcemap: true,
    strict: true,
    format: 'umd',
    exports: 'named',
    extend: true,
  },
  plugins: [
    // memory({
    // 	path: 'src/lib/simple-resize.js',
    // 	contents: `
    //     if (typeof module!='undefined') module.exports = simpleResize;
    // 	  else self.simpleResize = simpleResize;
    // 	`
    // }),
    resolve({
      mainFields: [
        'module',
        'main',
        'jsnext'
      ],
      browser: true,
    }),
    commonjs(),
    // eslint(),
    babel({
      // sourceMap: true,
      exclude: 'node_modules/**',
      babelrc: false,
      "presets": [
        [
          "@babel/preset-env", 
          {
            "targets": {
              "browsers": ["last 2 versions", "ie >= 7"],
              // "node": "current",
              // "esmodules": true
            },
            // "modules": "umd",
            // "useBuiltIns": "entry",
            // "corejs": 3,
            // "debug": true
          }
        ]
      ],
      "plugins": [
        // ["import", {
        //   "libraryName": "watType",
        // }]
      ]
    }),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      // SimpleResize: `window.SimpleResize = 'default' in SimpleResize ? SimpleResize['default'] : SimpleResize`
    }),
    // (process.env.NODE_ENV && uglify())
  ]
}