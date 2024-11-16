"use client";

import Link from "next/link";
import Image from 'next/image';
import Logo from "@/components/logo";
import { FullButton, IconButton } from '@/components/buttons';
import { useEffect } from "react";

export default function Signup2() {

  const handleChoice = (role) => {
    console.log("oiii-");
    if (typeof window !== 'undefined') {
        console.log("oiii-");
        
      window.localStorage.setItem('userRole', role);
    }
  };

  useEffect(() => {
    const storedRole = window.localStorage.getItem('userRole');
    console.log("Stored user role:", storedRole);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <Logo />

      <form className="flex flex-col mt-6">
        <div className="grid grid-cols-2 gap-4">
          <div onClick={() => handleChoice('entregador')} >
            <IconButton
              icon={<Image src="/icons/Moto.svg" alt="Ícone moto" width={70} height={70} />}
              text="Entregador"
              
              link="/signup/signup3" 
            />
          </div>
          <div  onClick={() => handleChoice('cliente')}>
            <IconButton
              icon={<Image src="/icons/user.svg" alt="Ícone user" width={70} height={70} />}
              text="Cliente"
             
              link="/signup/signup4" 
            />
          </div>
        </div>

        <div className="mt-6">
          <Link href="/signup/signup1">
            <FullButton text="Voltar" />
          </Link>
        </div>
      </form>
    </div>
  );
}
