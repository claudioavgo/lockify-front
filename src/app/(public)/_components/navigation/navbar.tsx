import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import HamburgerSheet from "./hamburgerDrawer";
import { config } from "@/config";

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="h-20 flex items-center justify-between gap-4 mx-auto sm:max-w-5xl px-6">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src="/icon.svg" alt="Logo" width={50} height={50} />
          </Link>
          <HamburgerSheet />
        </div>
        <div className="sm:flex gap-4 hidden">
          {config.public.navigation.navbarLinks.map((link) => (
            <Button variant="ghost" asChild key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div>
        <div className="flex gap-4">
          <Button size={"linkLg"} variant="link" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button size={"lg"} variant="default" asChild>
            <Link href="/register">Cadastrar</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}