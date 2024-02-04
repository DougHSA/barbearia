import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import { getServerSession } from "next-auth";
import { Service } from "@prisma/client";
import { authOptions } from "@/app/_lib/auth";
import { redirect } from "next/navigation";

interface BarbershopDetailsPageProps {
  params: {
    id?: string;
  };
}

const BarbershopDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {
  if (!params.id) {
    return redirect("/");
  }
  const [session, barbershop] = await Promise.all([
    getServerSession(authOptions),

  //     db.barber.findMany({ 
  //   where: { 
  //     barbershopId: params?.id 
  //   },
  //   include:{
  //     barberServices: true,
  //   }
  // }),
  db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: {
        include:{
          barberServices: {
            include:{
              barber: true,
            }
          }
        }
      },
    },
  }),
]);

  if (!barbershop) {
    return redirect("/");
  }

  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />

      <div className="px-5 flex flex-col gap-4 py-6">
        {barbershop.services.map((service) => (
          <ServiceItem key={service.id} barbershop={barbershop} service={service} isAuthenticated={!!session?.user} barbers={service.barberServices.map(b=>b.barber)} />
        ))}
      </div>
    </div>
  );
};

export default BarbershopDetailsPage;