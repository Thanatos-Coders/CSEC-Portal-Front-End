"use client";

import { FormData } from "@/components/features/Validation/LoginValidate";

export async function handleLogin(data: FormData) {
  try {
    const response = await fetch(
      "https://29aa-196-189-233-4.ngrok-free.app/api/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData?.message || "Login failed");
    }

    localStorage.setItem("token", responseData.token);
    localStorage.setItem("user", JSON.stringify(responseData.user));
    
    return { 
      success: true,
      data: responseData 
    };
  } catch (error) {
    console.log("Login failed:", error);
    return {
      success: false,
      error: error instanceof Error 
        ? error.message 
        : "Login failed. Please try again."
    };
  }
}