import { Card, CardContent, Typography, Box } from '@mui/material'
import DonutChart from '../charts/DonutChart.jsx'

export default function CloudAccountsWidget({ data }) {
  const { total, segments } = data

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Cloud Accounts
        </Typography>
        
        <Box sx={{ position: 'relative' }}>
          <DonutChart 
            data={segments} 
            centerText={`${total} Total`}
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 1 }}>
          {segments.map((segment, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Box sx={{ 
                width: 12, 
                height: 12, 
                bgcolor: segment.color, 
                borderRadius: '50%' 
              }} />
              <Typography variant="caption" color="text.secondary">
                {segment.label} ({segment.value})
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}