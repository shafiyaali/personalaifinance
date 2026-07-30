"use client"
import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LogInSchema } from "../schemas"
import { LoginForm } from "../types"
import { FieldError } from "@/components/ui/field"
import Link from "next/link"
import { LoginAction } from "../actions"
import { redirect } from "next/navigation"
const LogInForm = () => {

   const [formError, setFormError] = useState<string | undefined>("")
    const {register, handleSubmit, formState: {
            errors, isSubmitting
    }
 } = useForm<LoginForm>({
    resolver: zodResolver(LogInSchema)
 }
 );

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    const result = await LoginAction(data)  
   if(!result.success) {
      setFormError(result?.message)
   } else {
    redirect("/dashboard")
   }
  }
  return (
   <>
         <CardHeader>

            <CardTitle className='text-center'>AI Finance</CardTitle>
            <CardDescription className='text-center'>LogIn to your Account </CardDescription>
            
            

         </CardHeader>
      <CardContent >
               
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>

             <Label >Email</Label>
            <Input  {...register("email")} type='email' placeholder='email' />
            <FieldError>{errors.email?.message}</FieldError>
            <Label >Password</Label>
            <Input  {...register("password")} type="password"  placeholder='password'/>
             <FieldError >{errors.password?.message}</FieldError>
             <FieldError >{formError}</FieldError>
        <Button className="w-full" size="lg" disabled={isSubmitting} type='submit'>
           {isSubmitting ? "Logging In..." : "Log In"}
        </Button>

        <p>Dont have an account? <Link className='underline text-blue-500' href={"/"}> Register new User</Link></p>
     </form>
     
            </CardContent>
    </>
  )
}

export default LogInForm