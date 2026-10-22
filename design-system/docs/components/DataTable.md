# DataTable

Composed data table: caption, summary, search toolbar, bulk actions, sortable header with select-all, rows and pagination — in Table and Compact presentations…

`RA.DataTable` · 11c — Labels + Data

## Use

```jsx
<RA.DataTable />
```


## Props (DataTableProps)

_No props of its own._

## Guidance

Composed data table: caption, summary, search toolbar, bulk actions, sortable header with select-all, rows and pagination — in Table and Compact presentations and Results, Empty, No results, Loading and Error states.

### Props
`caption`, `summary`, `columns` (`[{ label, sort, align }]`), `rows` (`[{ cells, selected }]`), `state` (`results | empty | no-results | loading | error`), `presentation` (`table | compact`), `toolbarAction`, `bulkActions`, `range`.

Compact presentation swaps the grid for Selection rows under 600px. Non-result states replace the grid with the Empty State pattern and keep the toolbar. Select-all goes Mixed when part of the page is selected; the summary always names the selection count.
