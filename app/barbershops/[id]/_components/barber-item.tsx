import { Card, CardContent } from "@/app/_components/ui/card";
import { Barber } from "@prisma/client";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface BarberItemProps{
    onClick?: () => void;
    barber: Barber;
    className?: string;
}

const BarberItem = ({barber, onClick, className}:BarberItemProps) => {
    return (
        <button onClick={onClick}>
            <Card className={className}>
                <CardContent className="py-0 px-5 flex">
                    <div className="flex gap-2">
                        <div className="flex items-center">
                            <Avatar className="flex h-8 w-8 items-center justify-center">
                                <AvatarImage src={barber.image!} />
                                <AvatarFallback>{barber.name[0]}</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex flex-col py-3 gap-2 pl-5">
                            <h2 className="font-bold">{barber.name}</h2>
                            <h3 className="text-sm flex justify-start">{barber.role}</h3>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </button>
    );
}
 
export default BarberItem;