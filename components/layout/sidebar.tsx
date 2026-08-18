import { Sidebar, SidebarContent, SidebarMenu,SidebarFooter, SidebarHeader, SidebarMenuItem, SidebarMenuButton } from '../ui/sidebar'
import { User, LogOutIcon} from 'lucide-react'
import SidebarItems from './sidebar-menu'
import { Separator } from '../ui/separator'
import { getCurrentUser } from '@/lib/current-user'
import { SignOutAction } from '@/features/auth/actions'
const AppSidebar = async () => {
    
    const user = await getCurrentUser();
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
                    <SidebarMenuButton><User />{user.name}</SidebarMenuButton>
                    {/* <SidebarMenuButton ><Settings /> Settings</SidebarMenuButton> */}
                    <SidebarMenuButton onClick={SignOutAction}><LogOutIcon />  LogOut</SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar