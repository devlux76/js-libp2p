#!/bin/bash

# Template for package tsconfig.json
generate_tsconfig() {
  local package_name=$1
  cat << EOF
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": [
    "src"
  ]
}
EOF
}

# Update each package's tsconfig.json
for pkg in packages/*/; do
  if [ -d "$pkg" ]; then
    echo "Updating tsconfig.json for $pkg"
    generate_tsconfig "$(basename "$pkg")" > "${pkg}tsconfig.json"
  fi
done

# Update each package's .aegir.js
for pkg in packages/*/; do
  if [ -d "$pkg" ]; then
    echo "Updating .aegir.js for $pkg"
    cat << EOF > "${pkg}.aegir.js"
/** @type {import('aegir/types').PartialOptions} */
export default {
  build: {
    bundlesizeMax: '18kB',
    config: {
      esbuild: {
        target: 'esnext',
        format: 'esm',
        minify: true,
        platform: 'browser'
      }
    }
  }
}
EOF
  fi
done
