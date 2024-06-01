"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";


export default function Hero({ jsonUrl }: any) {
    const [heroItems, setheroItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(jsonUrl);
                const data = await response.json();
                setheroItems(data["Hero"]);
            } catch (error) {
                console.error("Error fetching JSON file:", error);
            }
        } fetchData();
    }, [jsonUrl]);


    return (
        <div className="text-black mt-[72px] md:mt-[94px] flex flex-col gap-[74px] md:gap-[99px] mb-[64px] md:mb-[176px]">
            {heroItems.map((item: any, itemIndex: number) => (
                <div key={itemIndex}>
                    <h3 className=" text-black dark:text-white text-[24px] md:text-[36px] font-poppins font-semibold text-center mb-[48px] md:mb-[64px]">
                        {item.title} </h3>
                    <Image src={item.image} alt={""} height={itemIndex === 0 ? 167 : 240} width={358} className={`m-auto ${itemIndex === 0 ? 'md:h-[343px] md:w-[741px]' : 'md:h-[456px] md:w-[682px]'} `} />
                </div>
            ))}
        </div>
    );
}