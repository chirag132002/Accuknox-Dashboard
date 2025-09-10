import { Card, CardContent, Typography, Box, List, ListItem, ListItemText } from '@mui/material'
import ProgressBar from '../charts/ProgressBar.jsx'

export default function ComplianceWidget({ data }) {
  const { standards } = data

  const getColor = (percentage) => {
    if (percentage >= 80) return 'success'
    if (percentage >= 60) return 'warning'
    return 'error'
  }

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Compliance status
        </Typography>
        
        <List>
          {standards.map((standard, index) => (
            <ListItem key={index} sx={{ px: 0, flexDirection: 'column', alignItems: 'stretch' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">
                  {standard.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {standard.percentage}%
                </Typography>
              </Box>
              <ProgressBar value={standard.percentage} label="" color={getColor(standard.percentage)} />
            </ListItem>
          ))}
        </List>

        <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 8, height: 8, bgcolor: 'grey.400', borderRadius: '50%', mr: 1 }} />
            <Typography variant="caption" color="text.secondary">Unavailable</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 8, height: 8, bgcolor: 'success.main', borderRadius: '50%', mr: 1 }} />
            <Typography variant="caption" color="text.secondary">Passed</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 8, height: 8, bgcolor: 'warning.main', borderRadius: '50%', mr: 1 }} />
            <Typography variant="caption" color="text.secondary">Warning</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 8, height: 8, bgcolor: 'error.main', borderRadius: '50%', mr: 1 }} />
            <Typography variant="caption" color="text.secondary">Failed</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
