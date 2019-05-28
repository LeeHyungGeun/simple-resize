import { rollup } from 'rollup'
import options from './rollup.config'

async function build() {
  const bundle = await rollup(options)

  // console.log(bundle.watchFiles)

  // generate code
  const { output } = await bundle.generate(options.output).then(() => {
    bundle.write(options.output).then(() => {
      console.log('BUILD IS DONE')
    })
  })
  
}

build()