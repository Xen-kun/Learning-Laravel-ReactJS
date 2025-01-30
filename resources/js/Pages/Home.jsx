import { Link } from "@inertiajs/react";

export default function Home({name}){
    return(
        <>
        {/* nu met kayat mo i call out jai indeclare mo nga name dijai web.php, kasta nukwa format na */}
            <h1 className="title">Hello {name}</h1>

            {/* preserve the scroll position of clicking something*/}
            <Link preserveScroll href="/" className="block title mt-[1000px]">{new Date().toLocaleTimeString()}</Link>
        </>
    );
}