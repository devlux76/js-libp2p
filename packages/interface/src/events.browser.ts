/**
 * No-op implementation for browser environments.
 * Accepts the same arguments as Node.js version for compatibility.
 */
export function setMaxListeners (_n: number, ..._eventTargets: EventTarget[]): void {}
