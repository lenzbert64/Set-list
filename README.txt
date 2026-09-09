Set List PWA v1.38

Bug fix:
- Fixed Current Set Undo.
- Root cause in v1.37: Undo called cancelPendingDeletes(), but that function was missing, causing a JavaScript ReferenceError before the undo state could be restored.
- Added cancelPendingDeletes() properly.
- Clear Current Set and opening a Saved Set also now safely cancel pending 1-second deletions.
- 10-step Undo and delayed red-outline deletion remain unchanged.
