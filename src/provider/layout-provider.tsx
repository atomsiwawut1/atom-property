"use client";
import React, { useEffect } from "react";
import { UserButton } from "@clerk/nextjs";
import { Button, Dropdown, message } from "antd";
import { GetCurrentUserFromMongoDB } from "../actions/users";
import { User } from "@prisma/client";
import { usePathname } from "next/navigation";
import Loader from "@/components/loader";
import { useRouter } from "next/navigation";


function LayoutProvider({ children }: { children: React.ReactNode }) {
  const getHeader = () =>{
    return <div className="bg-primary p-4 flex justify-between">header</div>
  };
   
  const getContent = () =>{
    return <div>{children}</div>
  };

  return (
    <div>
      {getHeader()}
      {getContent()}

    </div>
  );
}
export default LayoutProvider;
