import { watch } from 'rollup'
import open from 'open'
import options from './rollup.config'
import config from './config'

const _options = {
  ...options,
  watch: {
    chokidar: true,
    // clearScreen,
    exclude: 'node_modules/**',
    include: 'src/**'
  }
}

const watcher = watch( _options )
watcher.on('event', async event => {
  //   START        — the watcher is (re)starting
  //   BUNDLE_START — building an individual bundle
  //   BUNDLE_END   — finished building a bundle
  //   END          — finished building all bundles
  //   ERROR        — encountered an error while bundling
  //   FATAL        — encountered an unrecoverable error
  console.log(`Rollup watcher event code: ${event.code}`)
  const { code } = event
  switch(code) {
    case 'START': {
      await open(config.PATH)
      // await open(`${config.HOST}:${config.PORT}`)
      // break
    }
    case 'ERROR': {
      // break
    }
  }
});
// watcher.close()
