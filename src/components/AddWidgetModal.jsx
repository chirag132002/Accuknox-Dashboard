import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWidget } from '../store/dashboardSlice'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Tabs,
  Tab,
  TextField,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Box,
  Typography,
  Divider
} from '@mui/material'

export default function AddWidgetModal({ initialTab, tabs, onClose }) {
  const categories = useSelector(s => s.dashboard.categories)
  const dispatch = useDispatch()
  const [tab, setTab] = useState(initialTab || tabs[0]?.id)
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => { if (initialTab) setTab(initialTab) }, [initialTab])

  const list = useMemo(() => {
    const current = categories.find(c => c.id === tab)
    if (!current) return []
    const q = search.trim().toLowerCase()
    return current.widgets
      .filter(w => (q ? `${w.name} ${w.text || ''}`.toLowerCase().includes(q) : true))
      .map(w => ({ id: w.id, label: w.name }))
  }, [categories, tab, search])

  function onConfirm() {
    if (!tab || !name.trim()) return
    dispatch(addWidget(tab, { 
      name: name.trim(), 
      text: text.trim() || 'Custom widget',
      type: 'custom',
      data: {}
    }))
    setName(''); setText('')
    onClose()
  }

  return (
    <Dialog open onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Add Widget</Typography>
          <Button onClick={onClose}>Close</Button>
        </Box>
      </DialogTitle>
      
      <DialogContent>
        <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} sx={{ mb: 2 }}>
          {tabs.map(t => (
            <Tab key={t.id} label={t.name} value={t.id} />
          ))}
        </Tabs>

        <TextField
          fullWidth
          placeholder="Search in this category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Typography variant="subtitle2" gutterBottom>
          Existing widgets in {tabs.find(t => t.id === tab)?.name}:
        </Typography>
        
        <List sx={{ maxHeight: 200, overflow: 'auto', mb: 2 }}>
          {list.map(row => (
            <ListItem key={row.id} sx={{ px: 0 }}>
              <Checkbox checked readOnly />
              <ListItemText primary={row.label} />
            </ListItem>
          ))}
          {list.length === 0 && (
            <ListItem>
              <ListItemText primary="No widgets in this category yet." />
            </ListItem>
          )}
        </List>

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle2" gutterBottom>
          Add new widget to this category:
        </Typography>
        
        <TextField
          fullWidth
          placeholder="Widget name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          placeholder="Widget text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={onConfirm} disabled={!name.trim()}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  )
}