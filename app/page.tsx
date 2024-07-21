import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl">dashboard</h1>
      <Button variant="destructive" size="lg" className="text-black-400">
        Click Me
      </Button>
    </>
  );
}
