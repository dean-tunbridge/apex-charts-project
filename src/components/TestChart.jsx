import ReactApexChart from 'react-apexcharts'
import '../index.css'

const TestChart = () => {
  const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']

  const baseOptions = {
    xaxis: {
      categories,
    },
    dataLabels: {
      enabled: false,
    },
  }

  const lineChart = {
    series: [
      {
        name: 'Line Series',
        data: [10, 41, 35, 51, 49, 62],
      },
    ],
    options: {
      ...baseOptions,
      chart: { id: 'line-chart' },
      title: {
        text: 'Line Chart',
        align: 'center',
      },
    },
  }

  const barChart = {
    series: [
      {
        name: 'Bar Series',
        data: [23, 45, 56, 74, 61, 50],
      },
    ],
    options: {
      ...baseOptions,
      chart: { id: 'bar-chart', type: 'bar' },
      title: {
        text: 'Bar Chart',
        align: 'center',
      },
    },
  }

  const areaChart = {
    series: [
      {
        name: 'Area Series',
        data: [31, 40, 28, 51, 42, 55],
      },
    ],
    options: {
      ...baseOptions,
      chart: { id: 'area-chart', type: 'area' },
      title: {
        text: 'Area Chart',
        align: 'center',
      },
    },
  }

  const donutChart = {
    series: [44, 55, 13, 33],
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['Apple', 'Mango', 'Banana', 'Grapes'],
      title: {
        text: 'Donut Chart',
        align: 'center',
      },
    },
  }

  return (
    <div className="charts-container">
      <div className="chart-box">
        <ReactApexChart
          options={lineChart.options}
          series={lineChart.series}
          type="line"
          height={300}
        />
      </div>

      <div className="chart-box">
        <ReactApexChart
          options={barChart.options}
          series={barChart.series}
          type="bar"
          height={300}
        />
      </div>

      <div className="chart-box">
        <ReactApexChart
          options={areaChart.options}
          series={areaChart.series}
          type="area"
          height={300}
        />
      </div>

      <div className="chart-box">
        <ReactApexChart
          options={donutChart.options}
          series={donutChart.series}
          type="donut"
          height={300}
        />
      </div>
    </div>
  )
}

export default TestChart
