import { Grid, Typography, Paper } from '@mui/material'
import WidgetCard from './WidgetCard.jsx'

export default function Section({ category, searchQuery }) {
  const query = searchQuery?.toLowerCase() || ''
  const items = query
    ? category.widgets.filter((w) => `${w.name} ${w.text || ''}`.toLowerCase().includes(query))
    : category.widgets

  return (
    <Grid container spacing={3}>
      {items.map((w) => (
        <Grid item xs={12} md={6} lg={4} key={w.id}>
          <WidgetCard categoryId={category.id} widget={w} />
        </Grid>
      ))}
      {items.length === 0 && (
        <Grid item xs={12}>
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <Typography color="text.secondary">
              No widgets found.
            </Typography>
          </Paper>
        </Grid>
      )}
    </Grid>
  )
}