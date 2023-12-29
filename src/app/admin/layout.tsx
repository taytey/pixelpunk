import Admin from "../admin/page"
import Nav from "../layout/Nav.js";
import {currentUser} from "@clerk/nextjs";

export default async function AdminLayout({children}) {
    const user = await currentUser()

    return (
        <section>
            <Nav/>
            <Admin user = {user.username}/>
        </section>
    )

}