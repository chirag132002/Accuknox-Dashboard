import { Card, CardContent, Typography, Box } from '@mui/material'
import BarChart from '../charts/BarChart.jsx'

export default function ImageRiskWidget({ data }) {
  const { total, vulnerabilities } = data

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Image Risk Assessment
        </Typography>
        <Typography variant="h4" color="primary" gutterBottom>
          {total.toLocaleString()} Total Vulnerabilities
        </Typography>
        
        <Box sx={{ mb: 2 }}>
          <BarChart data={vulnerabilities} horizontal />
        </Box>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
          {vulnerabilities.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Box sx={{ width: 8, height: 8, bgcolor: item.color, borderRadius: '50%' }} />
              <Typography variant="caption" color="text.secondary">
                {item.label} ({item.value})
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}