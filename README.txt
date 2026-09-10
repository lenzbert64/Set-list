Set List PWA v1.55
Base: v1.54.

Changes:
- Adds independent category management for Repertoire and Saved Sets.
- Uncategorised is now a protected system category.
- Long-press the currently selected category in the Repertoire or Saved Sets filter:
  * non-empty category: Rename category / Clear entire category
  * empty category: Rename category / Delete category
- Clear moves songs/sets to Uncategorised and keeps the emptied category.
- Delete is available only for empty categories and asks for confirmation.
- Rename updates all songs/sets assigned to that category.
- Migrates legacy 'Uncategorized' entries to 'Uncategorised'.
- Fixes the occasional red Delete-button flash while vertically scrolling Repertoire by keeping the swipe-delete layer hidden unless an actual horizontal swipe is occurring.
- No other app behavior changed.
