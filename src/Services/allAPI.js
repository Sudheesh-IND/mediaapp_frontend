
import { base_url } from "./base_url";
import { commpnAPI } from "./commonAPI";

//1.upload video

export const uploadVideo= async(reqBody)=>{

    return await commpnAPI('post',`${base_url}/videos`,reqBody)
}

//2. get all video
export const getVideo=async()=>{

    return await commpnAPI('get',`${base_url}/videos`,'')

}

//3. get a video
export const getParticularVideo=async(id)=>{
    return await commpnAPI('get',`${base_url}/videos/${id}`,'')
}

//delete a video

export const deleteVideo=async(id)=>{
    return await commpnAPI('delete',`${base_url}/videos/${id}`,{})
}