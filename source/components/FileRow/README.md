Per-file acquisition, validation and durable-add row with nine distinct states.

`state` (`selected | checking | ready | saving | complete | rejected | failed | cancelled | unavailable`), `filename`, `metadata`, `details`, `progress` (saving), `actions`, `statusText`. Filename `web-label-l`, status `web-label-m` (Rejected and Failed in `text-danger`), meta `web-body-s`; Checking and Saving show a small progress bar.

Filenames and metadata are content, never trusted identifiers. Keep each state's wording — Rejected (choose another) and Failed (retry available) are different outcomes.
