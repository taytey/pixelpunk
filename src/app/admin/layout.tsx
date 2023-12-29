
import Nav from "../layout/Nav.js";

export default function AdminLayout({children}) {
    return (
        <section>
            <Nav/>
            {children}
        </section>
    )

}