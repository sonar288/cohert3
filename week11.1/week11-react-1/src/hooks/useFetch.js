import { useState, useEffect } from "react";
//for the spicfic url
// export function usePostTitle(){
//     const [post,setPost]=useState({});
    
//     async function getPost(){
//        const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
//        const json = await response.json();
//        setPost(json)
//     }   

//     useEffect(()=>{
//       getPost();
//     },[])
//     return post.title;
// }

// for the genric url 
export function useFetch(url){
      
    const [finalData,getFinalData] = useState({});
    const [loading,setLoading] = useState(true);
    console.log(url);
    async function getData(){
        setLoading(true);
        const response= await fetch(url);
        const json = await response.json();
        getFinalData(json);
        setLoading(false)
    }
    useEffect(()=>{
        getData();
    },[url])
    return{
        finalData,
        loading
    }
}