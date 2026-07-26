"use client";

import { registerSchema } from '../schemas'
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button'

type signUpFormType = z.infer<typeof registerSchema>;

export function SignupForm () {

    const {register, handleSubmit, formState: {
            errors, isSubmitting
    }
 } = useForm<signUpFormType>({
    resolver: zodResolver(registerSchema)
 }
 );

  const onSubmit: SubmitHandler<signUpFormType> = (data) => {
        console.log(data)
  }
  return (

    <>
    <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register("name")} type="text" placeholder='Name' />
            {errors.name && <div className="text-red-500">{errors.name.message}</div>}
            <Input {...register("email")} type='email' placeholder='email' />
            {errors.email && <div className="text-red-500">{errors.email.message}</div>}
            <Input {...register("password")} type="password"  placeholder='password'/>
            {errors.password && <div className="text-red-500">{errors.password.message}</div>}
            <Input {...register('confirmPassword')} type='password' placeholder='confirmPassword' />
            {errors.confirmPassword && <div className="text-red-500">{errors.confirmPassword.message}</div>}
            {/* <Input {...register('phone')} type='number' placeholder='number'/>
             {errors.phone && <div className="text-red-500">{errors.phone.message}</div>} */}
        <Button size="lg" disabled={isSubmitting} type='submit'>
            Submit
        </Button>
     </form>
     </>
    
  )
}

