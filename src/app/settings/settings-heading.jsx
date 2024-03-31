"use client";

import { cookieGetter } from "@/app/utils/cookieGetter";


const SettingsHeading = () => {
  const username = cookieGetter("username");
  return ( <div>
    <h3>
      Welcome {username}!
    </h3>
  </div> );
}
 
export default SettingsHeading;