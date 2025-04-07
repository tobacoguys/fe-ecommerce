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
                    <form >
                        <input 
                            placeholder="Enter you email" 
                            type="email" 
                            name="user-email" 
                            id="user-email"
                            className="px-3 py-2 rounded border focus:outline-none w-full"
                        />{""}
                    </form>
                </div>
            </section>
        </main>
    );
}