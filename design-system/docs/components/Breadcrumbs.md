# Breadcrumbs

Desktop trail and mobile back-context.

`RA.Breadcrumbs` · 11d — Navigation

## Use

```jsx
<RA.Breadcrumbs />
```


## Props (BreadcrumbsProps)

_No props of its own._

## Guidance

Desktop trail and mobile back-context.

`items` (`[{ label, href }]`, last is current), `viewport` (`desktop | mobile`). Ancestors `text-secondary` links, separators `›` in `text-muted`, current item `text-primary` with `aria-current="page"`. Mobile collapses to "‹ Parent / Current".
