import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '../ui/sidebar';
import { LayoutDashboard, Wallet, Tags, Receipt } from 'lucide-react';
import Link from 'next/link';
export const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Transactions",
    href: "/transactions",
    icon: Wallet,
  },
  {
    title: "Categories",
    href: "/categories",
    icon: Tags,
  },
  {
    title: "Receipts",
    href: "/receipts",
    icon: Receipt,
  },
];

const SidebarMenuItems = () => {
  return (
   <SidebarMenu>
  {navItems.map((nav) => (
    <SidebarMenuItem key={nav.title}>
      <Link
         href={nav.href} >
      <SidebarMenuButton >
        <nav.icon />{nav.title}
       
      </SidebarMenuButton>
       </Link>
    </SidebarMenuItem>
  ))}
</SidebarMenu>
  )
}

export default SidebarMenuItems