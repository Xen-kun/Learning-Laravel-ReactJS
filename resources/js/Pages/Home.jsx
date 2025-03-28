import { Link } from "@inertiajs/react";
import { space } from "postcss/lib/list";
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Home({posts}){
    // console.log(posts);

    const route = useRoute()

    return(
        <>
        {/* nu met kayat mo i call out jai indeclare mo nga name dijai web.php, kasta nukwa format na */}
            <h1 className="title">home page</h1>

            {/* preserve the scroll position of clicking something*/}
            {/* <Link preserveScroll href="/" className="block title mt-[1000px]">{new Date().toLocaleTimeString()}</Link> */}



{/* LISTING RESOURCES AND PAGINATION IN HOMEPAGE*/}
            <div>
                {posts.data.map(post => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <span>Post on: </span>
                            <span>{ new Date(post.created_at).toLocaleTimeString() }</span>
                        </div>
                        <p className="font-medium">{post.body}</p>

                        {/* Show Resources */}
                        {/* <Link href={`/posts/${post.id}`} className="text-link">Read more...</Link> */}
                        <Link href={route('posts.show', post)} className="text-link">Read more...</Link>
                    </div>
                ))}
            </div>

            <div className="py-12 px-4">
                {posts.links.map(link => (
                    link.url ? (
                    <Link
                        key={link.label} 
                        href={link.url} 
                        dangerouslySetInnerHTML={{__html: link.label}}
                        className={`p-1 mx-1 ${link.active ? "text-blue-500 font-bold" : ''}`}
                    />
                ) : (
                    <span
                        key={link.label}
                        dangerouslySetInnerHTML={{__html: link.label}}
                        className="p-1 mx-1 text-slate-300"
                    ></span>
                )
                ))}
            </div>
        </>
    );
}