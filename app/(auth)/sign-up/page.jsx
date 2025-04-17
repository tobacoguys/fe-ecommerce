"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Page(){
    return (
        <main className="w-full flex justify-center items-center bg-gray-300 md:p-24 min-h-screen ">
            <section className="flex flex-col gap-3">
                <div className="flex justify-center">
                    <img className="h-12" src="/logo.png" alt="Logo" />
                </div>

                <div className="flex flex-col gap-3 bg-white md:p-10 p-5 rounded-xl md:min-w-[440px] w-full">
                    <h1 className="font-bold text-xl">
                        Sign Up With Email
                    </h1>
                    <form className="flex flex-col gap-3">
                            <input
                                placeholder="Enter your Name"
                                type="text"
                                name="user-name"
                                id="user-name"
                                className="px-3 py-2 rounded-xl border focus:outline-none w-full"
                            />
                            <input
                                placeholder="Enter your email"
                                type="email"
                                name="user-email"
                                id="user-email"
                                className="px-3 py-2 rounded-xl border focus:outline-none w-full"
                            />
                            <input
                                placeholder="Enter your password"
                                type="password"
                                name="user-password"
                                id="user-password"
                                className="px-3 py-2 rounded-xl border focus:outline-none w-full"
                            />
                            <input
                                placeholder="Confirm your password"
                                type="password"
                                name="user-password-confirm"
                                id="user-password-confirm"
                                className="px-3 py-2 rounded-xl border focus:outline-none w-full"
                            />
                            <Button color="primary" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-xl">
                                Sign Up
                            </Button>
                    </form>
                    <div className="flex justify-between">
                        <Link href={`/login`}>
                            <button className="font-semibold text-sm text-blue-700">
                                Already user? Login
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}