/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */
// Declare the Worker context type
declare const self: DedicatedWorkerGlobalScope;

// Web Worker for heavy computation
self.onmessage = () => {
  let t = 0;
  for (let i = 0; i < 1e8; i++) {
    t += i;
  }
  self.postMessage(t);
};

export {}; // Add export to ensure TypeScript treats this as a module
