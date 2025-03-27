import { useForm } from "@inertiajs/react";

export default function Show({ post }) {

    const { delete: destroy } = useForm();

    function submit(e){
        e.preventDefault();
        destroy(`/posts/${post.id}`);
    }

    // console.log(useForm());
    return (
        <>
            {/* <h1 className="title">{post.body}</h1> */}
            <div className="p-4 border-b">
                    <div className="text-sm text-slate-600">
                        <span>Post on: </span>
                        <span>{ new Date(post.created_at).toLocaleTimeString() }</span>
                    </div>
                <p className="font-medium">{post.body}</p>

                <div className="flex items-center justify-end gap2">
                    {/* create a delete button: deleting a resource is done through an https request */}
                    <form onSubmit={submit}>
                        <button className="bg-red-500 rounded-md text-sm px-4 py-1 text-white">Delete</button>
                    </form>
                </div>
            </div>
        </>
    );
}
