import { prisma } from "@/shared/lib/db";
import { Button } from "../shared/ui/button";

export default async function Home() {
  const games = await prisma.game.findMany();

  console.log(games);

  return (
    <>
      {games.map((game) => (
        <p key={game.id}>{game.name}</p>
      ))}
      <Button>Button</Button>
    </>
  );
}
