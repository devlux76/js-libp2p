/** @type {import('aegir/types').PartialOptions} */
export default {
  build: {
    bundlesizeMax: '150kB',
    config: {
      esbuild: {
        target: 'esnext',
        format: 'esm',
        minify: true,
        platform: 'browser'
      }
    }
  },
  test: {
    browser: {
      config: {
        buildConfig: {
          esbuild: {
            target: 'esnext',
            format: 'esm',
            platform: 'browser'
          }
        }
      }
    }
  }
}
