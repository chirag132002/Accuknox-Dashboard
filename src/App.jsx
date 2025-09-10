import { useState } from 'react'
import { AppBar, Toolbar, Typography, TextField, Box, Container, Breadcrumbs, Link } from '@mui/material'
import { Search as SearchIcon, Add as AddIcon, Notifications as NotificationsIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material'
import Dashboard from './components/Dashboard.jsx'

function App() {
  const [query, setQuery] = useState('')
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#1976d2' }}>
        <Toolbar>
          <Breadcrumbs sx={{ color: 'white', mr: 4 }}>
            <Link color="inherit" href="#" sx={{ textDecoration: 'none' }}>
              Home
            </Link>
            <Typography color="inherit">Dashboard V2</Typography>
          </Breadcrumbs>
          
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <TextField
              placeholder="Search anything..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              size="small"
              sx={{ 
                width: 400,
                bgcolor: 'white', 
                borderRadius: 1,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { border: 'none' }
                }
              }}
              InputProps={{
                startAdornment: <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
              }}
            />
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <NotificationsIcon sx={{ color: 'white' }} />
            <AccountCircleIcon sx={{ color: 'white' }} />
            <Typography variant="body2" sx={{ color: 'white', ml: 1 }}>
              Jon
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="xl" sx={{ mt: 3, mb: 3 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" gutterBottom>
            CNAPP Dashboard
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            CSPM
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 2 }}>
            <TextField
              select
              size="small"
              value="7"
              sx={{ minWidth: 120 }}
            >
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
            </TextField>
          </Box>
        </Box>
        
        <Dashboard searchQuery={query} />
      </Container>
    </Box>
  )
}

export default App