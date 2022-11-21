import Head from 'next/head'
import Image from 'next/image'
import React, {useEffect, useState} from 'react';
import { List } from '../components/List/List';
import { Text } from '../components/Text/Text';



export default function Page() {

  let [content, setContent] = useState();
  let [value, setValue] = useState("")
  let [page, setPage] = useState(0)
  let [thumbnailUrl, setThumbnailUrl] = useState("");

  function handleClick(e) {
    e.preventDefault();
    if (!thumbnailUrl) return;
    setContent(last => [{
      thumbnailUrl: thumbnailUrl
    }, ...(last || [])]);

    setThumbnailUrl("");
  }


  useEffect(()=>{
    console.log("")
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(obj => setContent(obj));
    return () =>{
      console.log("unmount")
    }
  }, []);


 
  return (<div>
    <form onSubmit={handleClick}>
      <button type ="submit">Add item</button>
      <input type="url" value={thumbnailUrl} 
      onChange={e => setThumbnailUrl(e.target .value)} />
      <button type = "button" onClick={() => setPage(p => p+1)}>next</button>
      <button type = "button" onClick={() => setPage(p => p-1)}>prev</button>
      {page}
    </form>
      <ul>
        {content?.map((el => (
          <li key={el.id}>
            <img src={el.thumbnailUrl} />
            <span>{el.title}</span>
            </li>

        ))).slice(page *10, (page+1)*10)}
      </ul>
    </div>);
    
  
}
