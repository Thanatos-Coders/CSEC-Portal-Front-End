"use client"

import { useState } from "react"
import Image from "next/image"
import { Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import logo from "@/components/icons/images/Logoipsum.png"

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  remember: z.boolean().optional()
})

type FormData = z.infer<typeof formSchema>

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [emailFocused, setEmailFocused] = useState(false)
  const [passwordFocused, setPasswordFocused] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      remember: true
    }
  })

  const onSubmit = () => {
    router.push("/dashboard")
  }

  return (
    <div className="flex flex-col mx-auto w-full max-w-md space-y-6 p-6">
      <div className="flex items-center space-x-2">
        <Image src={logo} alt="Logoipsum" width={40} height={40} className="h-6 w-40" />
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Welcome 👋</h1>
        <p className="text-sm text-muted-foreground">Please login here</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
        {/* Email Input */}
        <div className="flex flex-col justify-end space-y-2">
          <div className="relative bg-white">
            <Input
              id="email"
              type="email"
              placeholder="robertallen@example.com"
              className={`transition-all duration-200 bg-input p-4 ${
                emailFocused ? "h-16" : "h-12"
              }`}
              {...register("email")}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
            {emailFocused && (
              <div className="absolute left-3 top-1 text-[#0a2463] font-medium text-sm">
                Email Address
              </div>
            )}
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="space-y-2">
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••••"
              className={`transition-all duration-200 py-5 ${
                passwordFocused ? "h-16" : "h-12"
              }`}
              {...register("password")}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
            />
            {passwordFocused && (
              <div className="absolute left-3 top-1 text-[#0a2463] font-medium text-sm">
                Password
              </div>
            )}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
            </Button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Remember Me */}
        <div className="flex gap-2 items-center space-x-2">
          <Checkbox id="remember" {...register("remember")} />
          <Label htmlFor="remember" className="text-sm font-medium text-gray-700">
            Remember Me
          </Label>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full h-10 rounded-[8px] text-white bg-[#0a2463] hover:bg-[#0a2463]/90">
          Login
        </Button>
      </form>
    </div>
  )
}
