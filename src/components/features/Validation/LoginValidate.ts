"use client";

import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional()
});

export type FormData = z.infer<typeof formSchema>;