export default function Background() {
    return(
        <main>
            <video autoPlay muted loop className="opacity-10 fixed min-h-screen min-w-screen max-w-none">
                <source src="/staticbg4.mp4" />
            </video>
        </main>
    )
}