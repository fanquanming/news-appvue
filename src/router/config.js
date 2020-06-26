
export default {
    routes: [
        {
            path:"/",
            name:"Home",
            component: ()=>import("@/views/Home"),
        },
        {
            path:"/login",
            name:"Login",
            component: ()=>import("@/views/Login"),
        },
        {
            path:"/reg",
            name:"Reg",
            component: ()=>import("@/views/Reg"),
        },
        {
            path:"/channel/:id",
            name:"ChannerlNews",
            component: ()=>import("@/views/ChannelNews"),
        },
        {
            path:"/personal",
            name:"Personal",
            component: ()=>import("@/views/Personal"),
            meta: {
                auth: true,
            }
        },
        {
            path:"/auth",
            name:"Auth",
            component: ()=>import("@/views/Auth")
        },
        {
            path:"/protected",
            name:"Protected",
            component:()=>import("@/views/Protected"),
            meta: {
                auth: true,
            }
        },
        {
            path:"*",
            name:"404",
            component: ()=>import("@/views/NotFound"),
        },
       
    ],
    mode: "history",
}