import styles from "@/app/page.module.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }

  return (
    <div className={styles.main}>
      Home Page
      {JSON.stringify(session)}
    </div>
  );
}
