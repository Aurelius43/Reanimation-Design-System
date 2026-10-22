User-confirmed audio import with separate validation and durable-save outcomes: Empty, Validating, Ready, Partial, Rejected, Unavailable, Duplicate, Importing, Failed, Partial import, Complete, Cancelling, Cancelled — Compact or Wide.

`state`, `layout`, `files` (ReadinessRow props). Validation results and save results are different messages; each state names what happened and the next action. Failed keeps the selection; Cancelling keeps files already saved. Importing never starts playback.
