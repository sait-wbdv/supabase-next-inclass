import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function ProtectedPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  return (
    <main>
      <h1>This is a protected page</h1>
      <p>Only authenticated users should be able to see it</p>
    </main>
  );
}
