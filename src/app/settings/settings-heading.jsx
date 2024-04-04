"use client";

import { cookieGetter } from "@/app/utils/cookieGetter";
import { useEffect, useState } from "react";

const SettingsHeading = () => {
  const username = cookieGetter("username");

  // Deals with the hydration error 
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
 

  return ( <div>
    <h3>
      Welcome {isClient && username}!
    </h3>
  </div> );
}
 
export default SettingsHeading;