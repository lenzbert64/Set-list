Set List PWA v1.36

Bug fix for v1.35:
- Fixed + / − and Current Set Undo.
- Cause: the new 10-step Undo code expected undoMain to be an array, but v1.35 still initialized it as null.
- Backup restore now also resets Current Set Undo to an empty array, not null.
- 10-step Undo and 1-second red-outline delayed deletion remain enabled.
- All v1.35/v1.34 data remains compatible.
