/** @type {import('aegir/types').PartialOptions} */
export default {
  build: {
    bundlesizeMax: '18kB',
    config: {
      target: 'esnext',
      format: 'esm',
      minify: true,
      platform: 'browser',
      conditions: ['browser', 'import'],
      entryPoints: ['./src/index.browser.ts'],
      outfile: './dist/src/index.browser.js',
      // Only include browser files
      resolveExtensions: ['.browser.ts', '.browser.js', '.ts', '.js'],
      // Exclude non-browser files
      plugins: [{
        name: 'exclude-node',
        setup(build) {
          build.onResolve({ filter: /^(crypto|util)$/ }, () => {
            return { external: true }
          })
        }
      }]
    }
  }
}
