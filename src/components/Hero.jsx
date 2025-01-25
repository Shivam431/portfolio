import React from "react";
import {HERO,HERO_CONTENT} from "../constants";
import myImg from "../assets/kevinRushProfile.png"
const Hero = ()=>{
    return (
        <>
        <section className="flex min-h-screen flex-wrap items-center">
            <div className="w-full md:w-1/2">
            <h2 className="my-8 p-2 text-2xl font-bold md:text-3xl lg:text-[5rem]">
                {HERO.name}
            </h2>
            <p className="p-2 text-xl tracking-tighter lg:text-2xl">
                {HERO.greet}
            </p>
            <p className="mb-8 p-2 text-lg">
                {HERO_CONTENT}
            </p>
            </div>

            <div className="w-full md:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img src={myImg} width={550} height={550} className="rounded-3xl"></img>
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero;