import Link from "next/link";
import {
    SignedIn,
    UserButton,
    currentUser
} from "@clerk/nextjs";
import SearchIcon from "./SearchIcon";

export default async function Nav() {

    const user = await currentUser();

    return(
            <nav className="relative w-full start-0 py-3 bg-none bg-neutral-950/50">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <h1 className="text-[#60d394] text-2xl font-pixel2 hover:text-black hover:bg-neutral-200 transition-all duration-200">PixelPunk</h1>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        { user?.id === "user_2aBjCZHCIex4UkDDmAAk1F0zbTU" &&
                            <button type="button"
                                    className="mr-10 font-pixel2 tracking-widest text-white hover:bg-neutral-800 rounded-lg focus:ring-4 focus:outline-none transition-all duration-500 focus:ring-neutral-300 px-6 py-2 text-center dark:hover:bg-neutral-700 dark:focus:ring-neutral-800 ">
                                <Link href="/admin">admin</Link></button>
                        }
                        {!user &&
                            <button type="button"
                                    className="font-montserrat tracking-widest text-white hover:bg-neutral-800 rounded-3xl focus:ring-4 focus:outline-none transition-all duration-500 focus:ring-neutral-300 font-medium text-sm px-6 py-2 text-center dark:hover:bg-neutral-700 dark:focus:ring-neutral-800 ">
                                <Link href="/signup">LOGIN</Link></button>

                        }

                        <SignedIn>
                            <UserButton afterSignOutUrl="/"/>
                        </SignedIn>

                        <button data-collapse-toggle="navbar-sticky" type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                         id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                            <li>
                            <Link href="/" className="block font-medium font-pixel my-2 mx-3 text-neutral-300 hover:text-neutral-500 transition-all duration-200 tracking-widest">h o m e</Link>
                            </li>
                            <li>
                                <Link href="/skins" className="block font-medium font-pixel  my-2 mx-3 text-neutral-300  hover:text-neutral-500 transition-all duration-200 tracking-widest">s k i n s</Link>
                            </li>
                            <li>
                                <Link href="/textures" className="block font-medium  font-pixel  my-2 mx-3 text-neutral-300 hover:text-neutral-500 transition-all duration-200 tracking-widest">t e x t u r e s</Link>
                            </li>
                            <li>
                                <Link href="/stats" className="block font-medium font-pixel my-2 mx-3 text-neutral-300 hover:text-neutral-500 transition-all duration-200 tracking-widest">s t a t s</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}