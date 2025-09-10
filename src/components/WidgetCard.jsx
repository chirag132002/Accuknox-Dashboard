import { useDispatch } from 'react-redux'
import { removeWidget } from '../store/dashboardSlice'
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import FindingsWidget from './widgets/FindingsWidget.jsx'
import CloudAccountsFailedWidget from './widgets/CloudAccountsFailedWidget.jsx'
import ComplianceWidget from './widgets/ComplianceWidget.jsx'
import CloudAccountsWidget from './widgets/CloudAccountsWidget.jsx'
import CloudRiskWidget from './widgets/CloudRiskWidget.jsx'
import NoDataWidget from './widgets/NoDataWidget.jsx'
import ImageRiskWidget from './widgets/ImageRiskWidget.jsx'
import ImageSecurityWidget from './widgets/ImageSecurityWidget.jsx'

const widgetComponents = {
  'findings': FindingsWidget,
  'cloud-accounts-failed': CloudAccountsFailedWidget,
  'compliance': ComplianceWidget,
  'cloud-accounts': CloudAccountsWidget,
  'cloud-risk': CloudRiskWidget,
  'no-data': NoDataWidget,
  'image-risk': ImageRiskWidget,
  'image-security': ImageSecurityWidget,
}

export default function WidgetCard({ categoryId, widget }) {
  const dispatch = useDispatch()
  const WidgetComponent = widgetComponents[widget.type] || (() => (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="h6">{widget.name}</Typography>
          <IconButton size="small" onClick={() => dispatch(removeWidget({ categoryId, widgetId: widget.id }))}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {widget.text || 'Custom widget'}
        </Typography>
      </CardContent>
    </Card>
  ))

  return <WidgetComponent data={widget.data} />
}