"use client";
import { useForm } from "react-hook-form";
import  { zodResolver }  from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as checkbox from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Logo from "../../components/icons/Logoipsum.png";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z.string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
  remember: z.boolean().optional()
});

type FormData = z.infer<typeof formSchema>;

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      remember: false
    }
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-sm">
        <div className="flex justify-center mb-4">
          <Image
            src={Logo}
            alt="Company Logo"
            width={180}
            height={80}
            className="object-contain"
            priority
          />
        </div>
        
        <div className="mb-6">
          <div className="mt-4">
            <h2 className="font-bold text-gray-800">WELCOME</h2>
            <p className="text-gray-600 text-sm mt-1">Please login here</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          <div className="relative">
            <div className="absolute top-1 left-3 text-xs text-gray-500">Email Address</div>
            <Input
              type="email"
              className={`pt-6 px-3 pb-2 ${errors.email ? "border-red-500 focus:ring-red-500" : ""}`}
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          
          <div className="relative">
            <div className="absolute top-1 left-3 text-xs text-gray-500">Password</div>
            <Input
              type="password"
              className={`pt-6 px-3 pb-2 ${errors.password ? "border-red-500 focus:ring-red-500" : ""}`}
              {...register("password")}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-8 pt-3">
            
            <div className="flex items-center space-x-2">
              <checkbox.Checkbox 
                id="remember" 
                {...register("remember")} 
              />
              <Label htmlFor="remember" className="text-sm">
                Remember Me
              </Label>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>

       
      </div>
    </div>
  );
}