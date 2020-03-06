import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/xcheck.js',
    format: 'umd',
    name: 'xcheck'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    uglify({
      mangle: {
        keep_fnames: true
      }
    })
  ],
  watch: {
    exclude: 'node_modules/**'
  }
}
