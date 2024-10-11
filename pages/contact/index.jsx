import { useEffect, useState } from "react";
import Link from "next/link";

export default function Contact(){
    const [message, setMessage] = useState('');
    const [items, setItems] = useState(['']);
    useEffect(() =>{
         fetch('/api/hello').then((value => value.json()))
         .then((data) => setMessage(data.name))

         fetch('/api/items').then((value => value.json()))
         .then((data) => setItems(data))
    },[]
    )
    return(
        <div>
            <h1>Contact Page</h1>
            <p>You can reach us on abc@gmail.com</p>
            <p>{message}</p>
            <Link href='/contact/info'>Click here for more Information</Link>
            <ul>
                {
                    items && items.map((item, index) =>(
                       <li key={item.id}>{item.name} : {item.type}</li>
                    ))
                }
            </ul>
        </div>
    )
}