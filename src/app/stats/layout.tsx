import Nav from "../layout/Nav";

export default function StatsLayout({
                                           children, // will be a page or nested layout
                                       }) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <Nav />
            {children}
        </section>
    )
}