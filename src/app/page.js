import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1>Este é o Dashboard</h1>
      <Link href='/login'>Clique aqui para ir para a tela de login</Link>
    </div>
  );
}
