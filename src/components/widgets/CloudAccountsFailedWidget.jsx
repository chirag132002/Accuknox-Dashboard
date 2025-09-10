import { Card, CardContent, Typography, Box, List, ListItem, ListItemText } from '@mui/material'
import ProgressBar from '../charts/ProgressBar.jsx'

export default function CloudAccountsFailedWidget({ data }) {
  const { accounts } = data

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Top 3 cloud accounts with failed controls
        </Typography>
        
        <List>
          {accounts.map((account, index) => (
            <ListItem key={index} sx={{ px: 0, flexDirection: 'column', alignItems: 'stretch' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Box sx={{ width: 8, height: 8, bgcolor: 'primary.main', borderRadius: '50%', mr: 1 }} />
                <Typography variant="body2" sx={{ flex: 1, fontSize: '0.75rem' }}>
                  {account.name}
                </Typography>
              </Box>
              <ProgressBar value={account.failedControls} label="" color="primary" />
            </ListItem>
          ))}
        </List>

        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <Box sx={{ width: 8, height: 8, bgcolor: 'primary.main', borderRadius: '50%', mr: 1 }} />
          <Typography variant="body2" color="text.secondary">
            Assets with findings
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
