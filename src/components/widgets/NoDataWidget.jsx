import { Card, CardContent, Typography, Box } from '@mui/material'
import { BarChart as BarChartIcon } from '@mui/icons-material'

export default function NoDataWidget({ data }) {
  const { message } = data

  return (
    <Card sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CardContent sx={{ textAlign: 'center', width: '100%' }}>
        <Box sx={{ mb: 2 }}>
          <BarChartIcon sx={{ fontSize: 48, color: 'text.secondary' }} />
        </Box>
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
      </CardContent>
    </Card>
  )
}
