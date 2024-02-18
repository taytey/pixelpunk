import Nav from '../layout/Nav'
export default function ProfileLayout({children}) {
    return (
        <section>
            <Nav />
            {children}
        </section>
    )
}