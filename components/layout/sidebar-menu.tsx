"use client"
import clsx from 'clsx';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '../ui/sidebar';
import { LayoutDashboard, Wallet, Tags, Receipt } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Transactions",
    href: "/transaction",
    icon: Wallet,
  },
  {
    title: "Categories",
    href: "/category",
    icon: Tags,
  },
  {
    title: "Receipts",
    href: "/receipt",
    icon: Receipt,
  },
];

const SidebarMenuItems = () => {
  const pathname = usePathname();
  return (
   <SidebarMenu>
  {navItems.map((nav) => (
    <SidebarMenuItem key={nav.title} className={clsx({'bg-blue-100' : pathname == nav.href})}>
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