import React, { useEffect, useState } from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'
import axiosInstance from '../Constants/BaseUrl';


function ScrbBarChart() {

    const allDistricts = [
        "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", 
        "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", 
        "Thiruvananthapuram", "Thrissur", "Wayanad"
      ];
    

    const[districts,setDistricts]=useState([])

    useEffect(() => {
        axiosInstance
      .post(`/getTotalCrimesByDistrict`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
            const apiData = res.data.data || [];
            const mergedData = allDistricts.map(district => {
              const found = apiData.find(item => item.district === district);
              return found ? found : { district, totalCrimes: 0 };
            });
            setDistricts(mergedData);
        } else if (res.data.status === 404) {
            const mergedData = allDistricts.map(district => ({
              district,
              totalCrimes: 0,
            }));
            setDistricts(mergedData);
            console.log("No data found for this police station");
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
          
       
      },[]);

  return (
    <div>
      <div style={{ width: '50%', height: 600 }}>
            <ResponsiveContainer width='100%' height='100%'>
                <BarChart data={districts} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                    <XAxis dataKey='district' angle={90} textAnchor='start' interval={0} dy={10} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey='totalCrimes' fill='#A10303' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default ScrbBarChart
