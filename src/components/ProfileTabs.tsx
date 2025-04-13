"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RequiredInformation } from "@/components/RequiredInformation";
import { OptionalInformation } from "@/components/OptionalInformation";
import { Resources } from "@/components/ProfileResources";
import { FileText, User, BookOpen } from "lucide-react";

export function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("required");

  return (
    <div style={{ marginLeft: "15px" }}>
      <div className="flex-1">
        <Tabs
          defaultValue="required"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-202"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="required" className="flex items-center gap-2">
              <FileText className="h-5 w-5" style={{marginBottom: "5px"}} />
              <span style={{paddingBottom: "5px"}}>Required Information</span>
            </TabsTrigger>
            <TabsTrigger value="optional" className="flex items-center gap-2">
              <User className="h-5 w-5" style={{marginBottom: "5px"}} />
              <span style={{paddingBottom: "5px"}}>Optional Information</span>
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" style={{marginBottom: "5px"}} />
              <span style={{paddingBottom: "5px"}}>Resources</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="required">
            <RequiredInformation />
          </TabsContent>
          <TabsContent value="optional">
            <OptionalInformation />
          </TabsContent>
          <TabsContent value="resources">
            <Resources />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
