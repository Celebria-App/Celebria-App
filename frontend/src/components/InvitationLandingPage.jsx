import React from 'react'
import Button from "./UI/Button";
import Link from "next/link";

export const InvitationLandingPage = () => {
  return (
    <div className="w-full h-full">
        <section className="flex flex-col md:flex-row w-auto h-auto">
        {/* Columna izquierda */}
        <div className="flex-1 flex items-center justify-center bg-gray-200 flex-col">
            <div className="p-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Invitaciones web <br></br>para tu evento.</h1>
            <p className="text-lg">
            Es momento de anunciar tu evento, hacelo de la forma más original, práctica y atractiva.
            </p>
            <div>
                {/* Editar */}
                <img className="mt-4" src="https://i.postimg.cc/k45F1dQ6/cc12.png" alt="carrousel" />
            </div>
            </div>
            <div className="flex-1 flex items-center justify-center md:flex-row flex-col">
                <Link href="/login" passHref>
                <Button text="Comenzar a crear" />
                </Link>
                <Button
                text="Ver Ejemplo"
                className="w-40 m-2 sm:w-auto bg-transparent border border-[#F33863] text-[#F33863] hover:bg-transparent"
                />
            </div>
        </div>

        {/* Columna derecha con la imagen */}
        <div className="flex-1 flex items-center justify-center bg-gray-300">
            <img
            src="https://noscasamos.ar/wp-content/uploads/sites/7/2022/07/Tarjetas.png"
            alt="Placeholder"
            className="max-w-auto h-auto object-cover"
            />
        </div>
        </section>
    </div>
  )
}
