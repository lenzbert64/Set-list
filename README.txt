Set List PWA v1.41

Critical v1.40 startup fix:
- Fixed the blank/empty app and non-working tabs.
- Root cause: the new Saved Set editor elements were inserted after the main JavaScript, while the script tried to attach handlers to them immediately.
- The Saved Set editor DOM is now loaded before the script initializes.
- No repertoire/localStorage data is changed.
- The v1.40 Saved Set rename editor remains otherwise unchanged.
- Current Set 10-step Undo and delayed deletion remain unchanged.
