import { Card } from "@/components/ui/card";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className=' flex min-h-screen items-center justify-center  '>
      
    <Card className='w-full max-w-md'>
        
   {children}
    </Card>
    </div>
  );
}