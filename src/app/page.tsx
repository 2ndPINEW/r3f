import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={"/playground"}>Go to Playground</Link>
    </main>
  );
}
