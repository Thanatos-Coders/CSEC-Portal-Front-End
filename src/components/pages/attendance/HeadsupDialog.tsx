"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export function HeadsupDialog() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [division, setDivision] = useState("");
  const [group, setGroup] = useState("");
  const [password, setPassword] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState("");



  const handleInvite = () => {
    // Reset form and close dialog
    setEmail("");
    setDivision("");
    setGroup("");
    setPassword("");
    setGeneratedPassword("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="flex rounded-md bg-[#003087] text-white h-8 w-22 items-center justify-center cursor-pointer hover:bg-[#002f87a2]"
        >
          <div className="flex gap-1 items-center justify-center">
            <div>Heads Up</div>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-auto h-auto p-4 overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Heads Up</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-3">
          <div className="space-y-2">
            <Select value={division} onValueChange={setDivision}>
              <SelectTrigger className="flex w-70 h-11 px-3 py-6 border-1 border-gray-300 rounded-[8px]">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cpd">Critical illness </SelectItem>
                <SelectItem value="wdd">Family Emergency </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <textarea
              placeholder="Enter a reason"
              className="flex w-70 h-18 px-3 py-2 border-1 border-gray-300 rounded-[8px] placeholder-gray-500"
            />
          </div>

          <div className="flex justify-center items-center gap-3">
            <div className="flex gap-3 items-center justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => {setOpen(false); handleInvite()}}
                className="flex h-10 w-35 rounded-md items-center justify-center bg-[#34495E0D] cursor-pointer hover:bg-[#48637e0d]"
                aria-label="Cancel"
              >
                <h3 className="ml-1"> Cancel </h3>
              </Button>
            </div>

            <div className="flex gap-5 items-center justify-center">
              <Button
                variant="outline"
                size="icon"
                onClick={handleInvite}
                className="flex h-10 w-35 rounded-md items-center justify-center bg-[#003087] cursor-pointer hover:bg-[#002f87a2]"
                aria-label="Add"
              >
                <h3 className="text-[#F8F8F8] ml-1"> Add </h3>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
