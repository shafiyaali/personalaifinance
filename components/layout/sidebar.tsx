import React from 'react'
import { Sidebar, SidebarContent, SidebarMenu,SidebarFooter,SidebarGroup, SidebarHeader, SidebarMenuItem, SidebarMenuButton, SidebarGroupContent, SidebarGroupLabel,SidebarGroupAction,  } from '../ui/sidebar'
// import SignOut from '@/features/auth/components/sign-out'
// import { Button } from '../ui/button'
import { Settings, User, LogOutIcon, LayoutDashboard } from 'lucide-react'
import SidebarItems from './sidebar-menu'
import { Separator } from '../ui/separator'

const AppSidebar = () => {
    
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
                    <SidebarMenuButton><User />Thanveer</SidebarMenuButton>
                    <SidebarMenuButton ><Settings /> Settings</SidebarMenuButton>
                    <SidebarMenuButton><LogOutIcon />  LogOut</SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar