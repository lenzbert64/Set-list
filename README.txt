Set List PWA v2.0 — Offline Final
Base: v1.72.

Offline support is enabled.
Open the deployed app online once after uploading all five files. After that the PWA can open and work in Airplane Mode.
Local data remains in localStorage exactly as before.
When online, navigation prefers the current GitHub Pages version; offline it falls back to the cached app shell.
Old cache versions are removed when a new service worker activates.
