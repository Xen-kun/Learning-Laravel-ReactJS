import './bootstrap';
import '../css/app.css'

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import Layout from '@/Layouts/Layout';

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob("./Pages/**/*.jsx", {eager:true})
        let page = pages[`./Pages/${name}.jsx`]
        
        //if the page has a default layout, then use that one. if it doesn't, then use the layout created
        page.default.layout = page.default.layout || ((page) => <Layout children = {page}/>);
        return page;
    },

    //this will create the frontend of the react app
    setup({ el, App, props }){
        createRoot(el).render(<App {...props} />)
    },
    
    //progress indicator
    progress: {
        color: '#fff'
    }
})