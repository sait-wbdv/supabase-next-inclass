"use client";

import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

async function logout() {
  let { error } = await supabase.auth.signOut();
  if (error) {
    console.error(error);
  }
}

export function LogoutButton() {
  return (
    <button
      onClick={logout}
      className="bg-amber-400 px-4 py-2 rounded-md m-4 w-fit"
    >
      Logout
    </button>
  );
}
