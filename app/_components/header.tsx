"use client"

import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, MenuIcon, UserIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import SideMenu from "./side-menu";

const Header = () => {
    const {data} = useSession();
    const handleLogoutClick = () => signOut(); 
    const handleLoginClick = () => signIn("google"); 
    return ( 
        <header>
            <Card>
                <CardContent className="p-5 justify-between items-center flex flex-row">
                    <Image src="/logo.png" alt="Barbearia" height={22} width={120} />
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="h-8 w-8">
                                <MenuIcon size={16}/>
                            </Button>
                        </SheetTrigger>

                        <SheetContent className="p-0">
                            <SideMenu/>
                        </SheetContent>
                    </Sheet>
                </CardContent>
            </Card>

        </header>
     );
}
 
export default Header;