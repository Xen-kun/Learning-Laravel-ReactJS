// export default function About(){
//     return<h1 className="title">About Page</h1>
// }

import { Link } from "@inertiajs/react";

export default function About({posts}){
    return(
        <>
        {/* nu met kayat mo i call out jai indeclare mo nga name dijai web.php, kasta nukwa format na */}
            <h1 className="title">Hello {posts}</h1>

            {/* preserve the scroll position of clicking something*/}
            <Link preserveScroll href="/" className="block title mt-[1000px]">{new Date().toLocaleTimeString()}</Link>
        </>
    );
}