import { getDashboardAction } from '@/features/dashboard/action'
import DashboardFeatures from '@/features/dashboard/components/dashboard-features';
import React from 'react'

const page = async() => {
  const monthlyTransactionDetails = (await getDashboardAction()).data;

  return (
    <>
      <DashboardFeatures
      monthlyTransactionDetails = {monthlyTransactionDetails} />
    </>
  )
}

export default page