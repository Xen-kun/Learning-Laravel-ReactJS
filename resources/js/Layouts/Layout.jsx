import { Link } from "@inertiajs/react";

export default function Layout({ children }){
    return(
        <>
            <header>
                <nav>
                    {/* NOTE: "/" = jai homepage nukwa eta, nga isu't naka route dijai web.php
                            "/[page] = eta met nukwa iti ipan mo nu daduma ah pages, nu ana't 
                            inpan mo dijai web.php ket isu metlang ipan mo dita tapnun ma e-route na"
                    */}

                    {/* Using a <Link> tag will intercept that call by intertia and not server call */}
                    {/* Kastuy nukwa nu default route, mapan nga home page nukwa */}
                    <Link className="nav-link" href="/">
                        Home
                    </Link>

                    {/* Nu kayat mo nga i route jai other pages ket kastuy nukwa*/}
                    <Link className="nav-link" href="/create"> 
                        Create
                    </Link>

                    {/* Nu kayat mo nga i route jai other pages ket kastuy nukwa*/}
                    <Link className="nav-link" href="/about">
                        About
                    </Link>
                </nav>
            </header>

            <main>
                {children}
            </main>
        </>
    )
}