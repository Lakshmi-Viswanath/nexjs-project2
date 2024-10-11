import { useRouter } from "next/router"
import BlogLayout from "./info";

export default function Post(){
    const router = useRouter();
    const {id} = router.query;
    return(
       <BlogLayout>
        <h1>Post : {id}</h1>
        <p>Contents of post {id}</p>
       </BlogLayout> 
    )
}