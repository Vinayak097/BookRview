import { backendurl } from "../config"

export const getBookById=async(id:string)=>{
    const res =await fetch(`${backendurl}/${id}`);
    if(!res.ok)    {
        return null;
    }
    const data=await res.json();
    return data;
}

export const getBoolists=async(limit=10,page=1)=>{    
        const res=await fetch(`${backendurl}/books`)
        if(!res.ok){
            return [];
        }   
        return (await res).json()   
}


