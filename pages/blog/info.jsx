import Link from "next/link";

export default function BlogLayout({children}){
    return(
        <div>
            <nav>        
            <ul>
               <li ><Link href='/blog'>All Posts</Link></li>
               <li ><Link href='/blog/1'>Post 1</Link></li>
               <li ><Link href='/blog/2'>Post 2</Link></li>

            </ul>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}