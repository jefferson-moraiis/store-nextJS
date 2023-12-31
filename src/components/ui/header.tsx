"use client"

import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, Percent, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";

const Header = () => {
  const {status, data} = useSession()
  const handleLogin = async() => {
    await signIn();
  }
  const handleLogout = async() => {
    await signOut();
  }
  return (
    <Card className="flex justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>
          {status === "authenticated" && data?.user?.name && (
              <div className="flex flex-col">
                <div className="flex items-center gap-2 py-4">
                  <Avatar >
                      <AvatarFallback>
                        {data?.user?.name?.[0].toUpperCase()}
                      </AvatarFallback>
                      {data?.user?.image && (
                        <AvatarImage src={data?.user?.image} />
                      )}
                  </Avatar>

                  <div className="flex flex-col">
                    <p className="text-sm opacity-75">Bem vindo!</p>
                    <p className="font-medium">{data?.user?.name}</p>
                  </div>
                </div>
                <Separator />
              </div>
            )}
          <div className="mt-4 flex flex-col gap-3">
            {status !== "authenticated" && (
              <Button onClick={handleLogin} variant="outline" className="w-full justify-start gap-2">
                <LogInIcon size={16}/>
                Fazer Login
              </Button>
            )}
            {status === "authenticated" && (
              <Button onClick={handleLogout} variant="outline" className="w-full justify-start gap-2">
                <LogInIcon size={16} />
                Fazer logout
              </Button>
            )}
            <Button variant="outline" className="w-full justify-start gap-2">
              <HomeIcon size={16} />
              Home
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <PercentIcon size={16}/>
              Ofertas
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <ListOrderedIcon size={16} />
              Catalogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">JM</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
