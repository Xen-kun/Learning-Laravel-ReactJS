import { Link } from "@inertiajs/react";

export default function Create({name}){
    return(
        <>
            <h1 className="title">Hello {name}</h1>

            {/* preserve the scroll position of clicking something*/}
            <Link preserveScroll href="/" className="block title mt-[1000px]">{new Date().toLocaleTimeString()}</Link>
        </>
    );
}