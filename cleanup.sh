#!/bin/bash

# Clean up node_modules and lock files first
rm -rf node_modules
rm -f pnpm-lock.yaml

# List of packages to keep
KEEP_PACKAGES=(
    "libp2p"
    "interface"
    "crypto"
    "peer-id"
    "peer-store"
    "peer-collections"
    "utils"
    "transport-webrtc"
    "transport-websockets"
    "transport-webtransport"
    "protocol-ping"
    "protocol-identify"
    "pubsub"
    "pubsub-floodsub"
    "multistream-select"
    "connection-encrypter-plaintext"
    "peer-discovery-bootstrap"
)

cd packages

# Create array of all directories
DIRS=(*)

# Remove directories not in KEEP_PACKAGES
for dir in "${DIRS[@]}"; do
    if [[ ! " ${KEEP_PACKAGES[@]} " =~ " ${dir} " ]]; then
        echo "Removing $dir"
        rm -rf "$dir"
    fi
done

cd ..

# Clean install remaining packages
pnpm install
