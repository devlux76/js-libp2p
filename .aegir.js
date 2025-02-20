/** @type {import('aegir/types').PartialOptions} */
export default {
  build: {
    bundlesizeMax: '150kB',
    config: {
      target: 'esnext',
      format: 'esm',
      minify: true,
      platform: 'browser'
    }
  },
  test: {
    browser: {
      config: {
        target: 'esnext',
        format: 'esm',
        platform: 'browser'
      }
    }
  }
}
