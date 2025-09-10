import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function PieChart({ data, title }) {
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: data.map(item => item.color),
        borderWidth: 0,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || ''
            const value = context.parsed
            return `${label}: ${value}%`
          }
        }
      }
    },
  }

  return (
    <div style={{ height: '300px', padding: '16px' }}>
      <Pie data={chartData} options={options} />
    </div>
  )
}
