import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  } else if (session.user) {
    redirect("/home");
  }

  return <></>;
}
