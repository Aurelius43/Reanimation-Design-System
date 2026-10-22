# ContentMediaDetail

Content-heavy detail whose media state — Ready, Loading, Unavailable, Error — is independent of the article.

`RA.ContentMediaDetail` · 12 — Patterns

## Use

```jsx
<RA.ContentMediaDetail />
```


## Props (ContentMediaDetailProps)

| prop | type | note |
| --- | --- | --- |
| `title` | `string` |  |
| `summary` | `string` |  |
| `image` | `string` |  |
| `imageAlt` | `string` |  |
| `caption` | `string` |  |
| `mediaState` | `"ready" \| "loading" \| "unavailable" \| "error"` |  |
| `body` | `string[]` |  |
| `action` | `string` |  |

## Guidance

Content-heavy detail whose media state — Ready, Loading, Unavailable, Error — is independent of the article.

`title`, `summary`, `image`, `imageAlt`, `caption`, `mediaState`, `body` (paragraphs), `action`. A media failure is not an article error: title, summary and body stay readable and the media slot offers its own retry.
