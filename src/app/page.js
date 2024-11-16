"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import Input from '@/components/Input';
import Logo from "@/components/logo";

import { FullButton } from "@/components/buttons";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter(); 

  const handleSubmit = () => {
    const userRole = localStorage.getItem("userRole") || "cliente";
    console.log(userRole);
    
    if (userRole === "entregador") {
      router.push("/entregador/dashboardEntregador");
    } else {
      router.push("/cliente/dashboardCliente");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <Logo />

      <form onSubmit={(e) => e.preventDefault()}>
        <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

        <Link href="/forgetpassword/forgetpass" className="text-lapBlue text-left text-xs mb-10">
          Esqueceu a senha?
        </Link>

        <div className="mt-4">
          <FullButton text="Entrar" onClick={handleSubmit} />
        </div>
      </form>

      <Link href="/signup/signup1" className="text-lapBlue text-center text-xs mt-4">
        Não tem conta? Cadastre-se!
      </Link>
    </div>
  );
}
