"use server";

import { db } from "@/app/_lib/prisma"
import { endOfDay, startOfDay } from "date-fns"

export const getDayBookings = async (date: Date, barbershopId: string) =>{
    const bookings = await db.booking.findMany({
        where:{
            date:{
                lte: endOfDay(date),
                gte: startOfDay(date),
            },
            barbershopId
        },
        include:{
            service:true,
        }
    });
    return bookings;
}