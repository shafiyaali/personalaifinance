import Header from '@/components/layout/header'
import Sidebar from '@/components/layout/sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
export default async function Layout({children}: {children: React.ReactNode}){

  return (
    <>
      <SidebarProvider>
         <Sidebar />
        <main className='w-full flex flex-col '>
          <Header />
          <div className='p-2'>
          {children}
          </div>
          
        </main>

      </SidebarProvider>      
      
    </>
  )
}
