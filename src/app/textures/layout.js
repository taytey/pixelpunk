import Nav from "../layout/nav";

export default function TexturesLayout({
        children, // will be a page or nested layout
}) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <Nav className="z-10"/>
                {children}
        </section>
    )
}