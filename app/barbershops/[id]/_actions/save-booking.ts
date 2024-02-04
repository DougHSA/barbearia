"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";

interface SaveBookingParams{
    barbershopId: string;
    serviceId: string;
    userId: string;
    date: Date;
    barberId: string;
}


export const saveBooking = async (params: SaveBookingParams) => {
    await db.booking.create({
        data:{
            barberId: params.barberId,
            barbershopId: params.barbershopId,
            serviceId: params.serviceId,
            userId: params.userId,
            date: params.date
        }
    });

    revalidatePath("/bookings");
}