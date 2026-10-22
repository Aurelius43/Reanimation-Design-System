# FormMessage

Titled form feedback: Information (pending or context), Danger (input summary or failed save), Success (confirmed persistence).

`RA.FormMessage` · 11b — Inputs + Selection

## Use

```jsx
<RA.FormMessage title="…">…</RA.FormMessage>
```


## Props (FormMessageProps)

| prop | type | note |
| --- | --- | --- |
| `tone` | `"information" \| "danger" \| "success"` |  |
| `title` * | `string` |  |
| `message` | `React.ReactNode` |  |
| `children` | `React.ReactNode` |  |

## Guidance

Titled form feedback: Information (pending or context), Danger (input summary or failed save), Success (confirmed persistence).

`tone`, `title`, `message` or children. 16px padding, `radius-md`, `background-surface`, 1px tone border (`border-strong`, `text-danger`, `status-success`); title `web-label-m` in the tone color, message `web-body-m` in `text-secondary`. Danger uses `role="alert"`, others `role="status"`.
