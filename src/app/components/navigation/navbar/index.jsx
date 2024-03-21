import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return(
        <>
            <div className="w-full top-0 h-30 backdrop-blur-sm bg-header bg-opacity-25">
                <div className="container px-4 mx-auto h-full">
                    <div className="flex justify-between md:flex-column items-center h-full">
                        <Link href="/"><div className="h-full flex justify-between items-center p-4">
                            <Image src='/logo.png' width={80} height={80} alt="Logo of a piece of chalk"/>
                            <h1 className=" ml-4 text-5xl text-text">Andreas Quist</h1>
                        </div></Link>
                        <ul className="gap-x-6 text-2xl flex flex-row">
                            <li><Link href="/about"><button className="inline appearance-none bg-background text-text p-2 rounded-md border-2 hover:bg-accent hover:text-3xl hover:p-2 active:bg-button">About</button></Link></li>
                            <li><Link href="/schedule"><button className="inline appearance-none bg-background text-text p-2 rounded-md border-2 hover:bg-accent hover:text-3xl hover:p-2 active:bg-button">Schedule</button></Link></li>
                            <li><Link href="/"><button className="inline appearance-none bg-background text-text p-2 rounded-md border-2 hover:bg-accent hover:text-3xl hover:p-2 active:bg-button">Contact</button></Link></li>
                            <li><Link href="/"><button className="inline appearance-none bg-background text-text p-2 rounded-md border-2 hover:bg-accent hover:text-3xl hover:p-2 active:bg-button">Links</button></Link></li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}