'use client';
import React from 'react'
import { MonthlyTotalsDTO } from '../types/dto';
import DashboardCharts from './dashboard-charts';

type FeatureType = {
    monthlyTransactionDetails : MonthlyTotalsDTO[] | undefined
}
const DashboardFeatures = ({monthlyTransactionDetails}: FeatureType) => {
  return (
    <>
    <div className='constainer flex '>

 
        <DashboardCharts 
             monthlyTransactionDetails = {monthlyTransactionDetails}
        />
           </div>
    </>
  )
}

export default DashboardFeatures