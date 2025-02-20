/** @type {import('aegir/types').PartialOptions} */
export default {
  build: {
    bundlesizeMax: '18kB',
    config: {
      target: 'esnext',
      format: 'esm',
      minify: true,
      platform: 'browser',
      entryPoints: ['./src/index.ts'],
      outfile: './dist/src/index.js',
      bundle: true,
      sourcemap: true,
      tsconfigRaw: {
        compilerOptions: {
          declaration: true,
          declarationDir: './dist/src',
          emitDeclarationOnly: true,
          esModuleInterop: true,
          moduleResolution: 'node',
          preserveSymlinks: true
        }
      }
    }
  }
}
