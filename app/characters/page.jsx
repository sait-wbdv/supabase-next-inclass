import { createClient } from "@/utils/supabase/server";

export default async function Characters() {
  const supabase = await createClient();

  let { data: characters } = await supabase.from("characters").select();
  console.log(characters);
  return (
    <main>
      <h1>Star Wars Characters!</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            {character.first_name} {character.last_name}
          </li>
        ))}
      </ul>
    </main>
  );
}
