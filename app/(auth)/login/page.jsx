"use client";

import { Button } from "@nextui-org/react";

export default function Login() {
    return (
        <main className="w-full flex justify-center items-center bg-gray-300 p-24 min-h-screen ">
            <section className="flex flex-col gap-3">
                <div className="flex justify-center">
                    <img className="h-12" src="/logo.png" alt="Logo" />
                </div>
                <div className="flex flex-col gap-3 bg-white p-10 rounded-xl min-w-[440px]">
                    <h1 className="font-bold text-xl">
                        Login With Email
                    </h1>
                    <form className="flex flex-col gap-3">
                        <input 
                            placeholder="Enter you email" 
                            type="email" 
                            name="user-email" 
                            id="user-email"
                            className="px-3 py-2 rounded-xl border focus:outline-none w-full"
                        />
                        <input 
                            placeholder="Enter you password" 
                            type="password" 
                            name="user-password" 
                            id="user-password"
                            className="px-3 py-2 rounded-xl border focus:outline-none w-full"
                        />
                        <Button color="primary" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-xl">
                            Login
                        </Button>
                    </form>
                </div>
            </section>
        </main>
    );
}