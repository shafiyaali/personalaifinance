"use client";

import { useState } from 'react';
import { registerSchema } from '../schemas'
import { RegisterForm } from '../types';
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button'
import { registerAction } from '../actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { FieldError } from '@/components/ui/field';


export function SignupForm () {

   const [formError, setFormError] = useState<string | undefined>("")
    const {register, handleSubmit, formState: {
            errors, isSubmitting
    }
 } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema)
 }
 );

  const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
  
   
    const result = await registerAction(data)  
   if(!result.success) {
      setFormError(result?.message)
   }
      

 
  }
  return (

    <>
    <div className=' flex min-h-screen items-center justify-center  '>
      
    <Card className='w-full max-w-md' >
         <CardHeader>

            <CardTitle className='text-center'>AI Finance</CardTitle>
            <CardDescription className='text-center'>Create your account </CardDescription>
            <CardDescription>Start managing your finance</CardDescription>
            

         </CardHeader>
      <CardContent >
               
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
<Label >Name</Label>
            <Input {...register("name")}  type="text" placeholder='Name' />
           <FieldError>{errors.name?.message}</FieldError>
            <Label >Email</Label>
            <Input  {...register("email")} type='email' placeholder='email' />
            <FieldError>{errors.email?.message}</FieldError>
            <Label >Password</Label>
            <Input  {...register("password")} type="password"  placeholder='password'/>
             <FieldError >{errors.password?.message}</FieldError>
            <Label >Confirm Password</Label>
            <Input  {...register('confirmPassword')} type='password' placeholder='confirmPassword' />
            <FieldError>{errors.confirmPassword?.message}</FieldError>
            {/* <Input {...register('phone')} type='number' placeholder='number'/>
             {errors.phone && <div className="text-red-500">{errors.phone.message}</div>} */}
        <FieldError >{formError}</FieldError>
        <Button className="w-full" size="lg" disabled={isSubmitting} type='submit'>
           {isSubmitting ? "Creating Account" : "Create Account"}
        </Button>

        <>Already have an account? <Link className='underline text-blue-500' href={"/auth/signIn"}> Sign In</Link></>
     </form>
     
            </CardContent>
     </Card>
     
    </div>
     </>
    
  )
}

