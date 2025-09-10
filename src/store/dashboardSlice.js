import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  categories: [
    {
      id: 'cspm',
      name: 'CSPM Executive Dashboard',
      widgets: [
        {
          id: 'findings',
          name: 'Findings',
          type: 'findings',
          data: {
            total: 50504.8,
            severity: [
              { label: 'Passed', value: 0, color: '#10b981' },
              { label: 'Low', value: 31, color: '#84cc16' },
              { label: 'Medium', value: 43, color: '#f59e0b' },
              { label: 'High', value: 22, color: '#f97316' },
              { label: 'Critical', value: 4, color: '#ef4444' }
            ],
            topAssets: ['AwsEc2SecurityGroup', 'gcp_compute_subnetwork', 'aws_iam_user'],
            totalAssets: 99
          }
        },
        {
          id: 'cloud-accounts-failed',
          name: 'Top 3 cloud accounts with failed controls',
          type: 'cloud-accounts-failed',
          data: {
            accounts: [
              { name: 'gcp_project-accuknox-cnapp', failedControls: 70 },
              { name: 'azure_subscription-9af872e2-64b3-4577-8693-7edf10600', failedControls: 50 },
              { name: 'aws_account-788471067825', failedControls: 30 }
            ]
          }
        },
        {
          id: 'compliance',
          name: 'Compliance status',
          type: 'compliance',
          data: {
            standards: [
              { name: 'PCI', percentage: 88.9, status: { passed: 85, warning: 5, failed: 10 } },
              { name: 'HIPAA', percentage: 95.5, status: { passed: 90, warning: 3, failed: 7 } },
              { name: 'CIS1', percentage: 37.5, status: { passed: 15, warning: 10, failed: 75 } },
              { name: 'CIS2', percentage: 20.0, status: { passed: 5, warning: 5, failed: 90 } }
            ]
          }
        },
        {
          id: 'cloud-accounts',
          name: 'Cloud Accounts',
          type: 'cloud-accounts',
          data: {
            total: 2,
            connected: 2,
            notConnected: 2,
            segments: [
              { label: 'Connected', value: 2, color: '#3b82f6' },
              { label: 'Not Connected', value: 2, color: '#93c5fd' }
            ]
          }
        },
        {
          id: 'cloud-risk',
          name: 'Cloud Account Risk Assessment',
          type: 'cloud-risk',
          data: {
            total: 9659,
            segments: [
              { label: 'Failed', value: 1689, color: '#ef4444' },
              { label: 'Warning', value: 681, color: '#f59e0b' },
              { label: 'Not available', value: 36, color: '#9ca3af' },
              { label: 'Passed', value: 7253, color: '#10b981' }
            ]
          }
        }
      ]
    },
    {
      id: 'cwpp',
      name: 'CWPP Dashboard',
      widgets: [
        {
          id: 'namespace-alerts',
          name: 'Top 5 Namespace Specific Alerts',
          type: 'no-data',
          data: {
            message: 'No Graph data available!'
          }
        },
        {
          id: 'workload-alerts',
          name: 'Workload Alerts',
          type: 'no-data',
          data: {
            message: 'No Graph data available!'
          }
        }
      ]
    },
    {
      id: 'registry',
      name: 'Registry Scan',
      widgets: [
        {
          id: 'image-risk',
          name: 'Image Risk Assessment',
          type: 'image-risk',
          data: {
            total: 1470,
            vulnerabilities: [
              { label: 'Critical', value: 9, color: '#dc2626' },
              { label: 'High', value: 150, color: '#ef4444' },
              { label: 'Medium', value: 500, color: '#f59e0b' },
              { label: 'Low', value: 600, color: '#84cc16' },
              { label: 'Info', value: 211, color: '#6b7280' }
            ]
          }
        },
        {
          id: 'image-security',
          name: 'Image Security Issues',
          type: 'image-security',
          data: {
            total: 2,
            issues: [
              { label: 'Critical', value: 2, color: '#dc2626' },
              { label: 'High', value: 2, color: '#ef4444' },
              { label: 'Medium', value: 0, color: '#f59e0b' },
              { label: 'Low', value: 0, color: '#84cc16' },
              { label: 'Info', value: 0, color: '#6b7280' }
            ]
          }
        }
      ]
    }
  ]
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: {
      reducer(state, action) {
        const { categoryId, widget } = action.payload
        const cat = state.categories.find(c => c.id === categoryId)
        if (cat) cat.widgets.push(widget)
      },
      prepare(categoryId, widget) {
        return { payload: { categoryId, widget: { id: widget.id || nanoid(), ...widget } } }
      },
    },
    removeWidget(state, action) {
      const { categoryId, widgetId } = action.payload
      const cat = state.categories.find(c => c.id === categoryId)
      if (cat) cat.widgets = cat.widgets.filter(w => w.id !== widgetId)
    },
    updateWidgetData(state, action) {
      const { categoryId, widgetId, data } = action.payload
      const cat = state.categories.find(c => c.id === categoryId)
      if (cat) {
        const widget = cat.widgets.find(w => w.id === widgetId)
        if (widget) widget.data = { ...widget.data, ...data }
      }
    }
  },
})

export const { addWidget, removeWidget, updateWidgetData } = dashboardSlice.actions
export default dashboardSlice.reducer