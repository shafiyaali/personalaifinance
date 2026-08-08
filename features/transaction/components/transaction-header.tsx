import { Button } from '@/components/ui/button'
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PlusIcon } from 'lucide-react'
import React from 'react'

const TransactionHeader = ({onCreate} : {onCreate : () => void}) => {
    
  return (
      <CardHeader >
          <div className='flex justify-between '>
              <CardTitle>Transactions</CardTitle>
              <Button onClick={onCreate}><PlusIcon /> Add Transaction</Button>
          </div>
            <CardDescription>Track and manage your income and expenses</CardDescription>
        </CardHeader>

   
  )
}

export default TransactionHeader