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
                </div>
            </section>
        </main>
    )
}