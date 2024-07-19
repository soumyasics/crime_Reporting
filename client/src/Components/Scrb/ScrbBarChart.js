import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'


function ScrbBarChart() {

    const districts = [
        { district: 'Trivandrum', crimeCount: 5 },
        { district: 'Kollam', crimeCount: 8 },
        { district: 'Pathanamthitta', crimeCount: 3 },
        { district: 'Alappuzha', crimeCount: 7 },
        { district: 'Kottayam', crimeCount: 6 },
        { district: 'Idukki', crimeCount: 2 },
        { district: 'Ernakulam', crimeCount: 10 },
        { district: 'Thrissur', crimeCount: 4 },
        { district: 'Palakkad', crimeCount: 5 },
        { district: 'Malappuram', crimeCount: 9 },
        { district: 'Kozhikode', crimeCount: 8 },
        { district: 'Wayanad', crimeCount: 1 },
        { district: 'Kannur', crimeCount: 6 },
        { district: 'Kasaragod', crimeCount: 3 }
    ];
    const districts2 = [
        { district: 'Trivandrum', crimeCount: 2 },
        { district: 'Kollam', crimeCount: 8 },
        { district: 'Pathanamthitta', crimeCount: 3 },
        { district: 'Alappuzha', crimeCount: 7 },
        { district: 'Kottayam', crimeCount: 6 },
        { district: 'Idukki', crimeCount: 2 },
        { district: 'Ernakulam', crimeCount: 10 },
        { district: 'Thrissur', crimeCount: 4 },
        { district: 'Palakkad', crimeCount: 5 },
        { district: 'Malappuram', crimeCount: 9 },
        { district: 'Kozhikode', crimeCount: 8 },
        { district: 'Wayanad', crimeCount: 1 },
        { district: 'Kannur', crimeCount: 6 },
        { district: 'Kasaragod', crimeCount: 3 }
    ];

  return (
    <div>
      <div style={{ width: '50%', height: 600 }}>
            <ResponsiveContainer width='100%' height='100%'>
                <BarChart data={districts} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                    <XAxis dataKey='district' angle={90} textAnchor='start' interval={0} dy={10} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey='crimeCount' fill='#A10303' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default ScrbBarChart
