import axios from "axios";
import { useCallback, useState } from "react";

const register = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const login = useCallback(async () => {
        try {
            await signIn("credentials", {
                email,
                password,
                callbackUrl: "/profiles",
            });
        } catch (error) {
            console.log(error);
        }
    }, [email, password]);

    const register = useCallback(async () => {
        try {
            await axios.post("/api/register", {
                email,
                name,
                password,
            });

            login();

        } catch (error) {
            console.log(error);
        }
    }, [email, name, password, login ]);
    return (
        <>
            <section className="text-gray-600 body-font flex justify-center items-center">
                <div className="px-20 py-24">
                    <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-fit mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Registrieren</h2>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">E-Mail</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Passwort</label>
                            <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button onClick={register} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Registrieren</button>
                        <p className="text-xs text-gray-500 mt-3">Ihre Daten sind mit uns sicher.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default register