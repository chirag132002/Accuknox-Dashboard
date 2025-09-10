import { Card, CardContent, Typography, Box, Chip, List, ListItem, ListItemText } from '@mui/material'
import PieChart from '../charts/PieChart.jsx'
import BarChart from '../charts/BarChart.jsx'

export default function FindingsWidget({ data }) {
  const { total, severity, topAssets, totalAssets } = data

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Findings
        </Typography>
        <Typography variant="h4" color="primary" gutterBottom>
          {total.toLocaleString()} Total open findings
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <BarChart data={severity} horizontal />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Top 3 assets with findings
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Total assets scanned: {totalAssets}
          </Typography>
        </Box>

        <List dense>
          {topAssets.map((asset, index) => (
            <ListItem key={index} sx={{ px: 0 }}>
              <Box sx={{ width: 8, height: 8, bgcolor: 'primary.main', borderRadius: '50%', mr: 1 }} />
              <ListItemText primary={asset} />
            </ListItem>
          ))}
        </List>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Box sx={{ width: 200, height: 200 }}>
            <PieChart data={severity} />
          </Box>
        </Box>

        <Typography variant="body2" color="text.secondary" align="top">
          Total findings: {total.toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  )
}
