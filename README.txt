Set List PWA v1.58
Base: v1.57.

Fixes:
1. Song editing / category confirmation
- Removed the 300 ms category-option tap suppression.
- Added a 350 ms delay after the native Key prompt before opening the category picker.
- This prevents the prompt's OK tap from leaking into the category dialog while allowing the first real category tap to work normally.

2. Add songs as a list
- Bulk parser is now more tolerant.
- Accepts m:ss or mm:ss, including one-digit seconds.
- Accepts common dash separators and flexible spacing.
- Key remains optional.
- On partial import, successfully added songs are saved and only the unrecognized lines remain in the text box for correction.

No other layout or behavior changed.
