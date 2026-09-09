Set List PWA v1.28

Fix for Current Set long-press editing:
- Existing named Current Sets from v1.26/v1.27 are automatically linked to the matching Saved Set by name.
- Long-press on the Current Set name now uses an iOS-specific touch handler.
- iOS text selection / Copy / Find popup is suppressed on the Current Set name.
- Saved Set names also suppress text-selection callouts during long press.
- All v1.27 data and backup compatibility remain intact.
- Caching remains disabled during development.
