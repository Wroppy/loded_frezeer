import { cookies } from "next/headers";

const SettingsHeading = () => {
  const username = cookies().get("username").value;

return ( <div>
    <h3>
      Welcome {username}!
    </h3>
  </div> );
}
 
export default SettingsHeading;