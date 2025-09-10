import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography, Button, Grid, Paper } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import Section from './Section.jsx'
import AddWidgetModal from './AddWidgetModal.jsx'

export default function Dashboard({ searchQuery }) {
  const categories = useSelector(s => s.dashboard.categories)
  const [openFor, setOpenFor] = useState(null)
  const tabs = categories.map(c => ({ id: c.id, name: c.name }))

  return (
    <Box>
      {categories.map(cat => (
        <Paper key={cat.id} sx={{ mb: 4, p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Box>
              <Typography variant="h5" gutterBottom>
                {cat.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {cat.id}
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setOpenFor(cat.id)}
            >
              Add Widget
            </Button>
          </Box>
          <Section category={cat} searchQuery={searchQuery} />
        </Paper>
      ))}

      {openFor && (
        <AddWidgetModal
          initialTab={openFor}
          tabs={tabs}
          onClose={() => setOpenFor(null)}
        />
      )}
    </Box>
  )
}