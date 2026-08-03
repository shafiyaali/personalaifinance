import { Sidebar, SidebarContent, SidebarMenu,SidebarFooter, SidebarHeader, SidebarMenuItem, SidebarMenuButton } from '../ui/sidebar'
// import SignOut from '@/features/auth/components/sign-out'
// import { Button } from '../ui/button'
import { Settings, User, LogOutIcon} from 'lucide-react'
import SidebarItems from './sidebar-menu'
import { Separator } from '../ui/separator'
// import { getCurrentSession } from '@/lib/session'
import { SignOutAction } from '@/features/auth/actions'
const AppSidebar = async () => {
    
    // const session = await getCurrentSession();
  return (
    <Sidebar>
        <SidebarHeader className='p-5' >AI Finance</SidebarHeader>
        <Separator />
        <SidebarContent>
                <SidebarItems />
        </SidebarContent>
        <Separator />
        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton><User />Shafiya</SidebarMenuButton>
                    <SidebarMenuButton ><Settings /> Settings</SidebarMenuButton>
                    <SidebarMenuButton onClick={SignOutAction}><LogOutIcon />  LogOut</SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar