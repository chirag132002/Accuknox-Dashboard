import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function DonutChart({ data, title, centerText }) {
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: data.map(item => item.color),
        borderWidth: 0,
        cutout: '70%',
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
          font: {
            size: 12
          }
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || ''
            const value = context.parsed
            return `${label}: ${value}`
          }
        }
      }
    },
  }

  return (
    <div style={{ position: 'relative', height: '300px', padding: '16px' }}>
      <Doughnut data={chartData} options={options} />
      {centerText && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          pointerEvents: 'none'
        }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#374151' }}>
            {centerText}
          </div>
        </div>
      )}
    </div>
  )
}
