import axios from 'axios'
import {getUrl} from  '../tool/urlTool'
import qs from 'qs'
import {tool} from '../tool/tool'
import {baseUrl} from '../config/env'
import {setpromisePost,setpromiseGet,setpromiseDelete,setpromisePut} from './conf'
const HostName = baseUrl







export const uploadImgUrl =  function(){
     let userId = 0
     if (getStore('token')){
         userId =  userId
     }
    return HostName +  'uploadImg/' + userId  + '/' + createToken()
 }

export const login = function(userName,password){
    const url =  HostName + 'login'
    return setpromisePost(url,{userName:userName,password:password})
}

export const register = function(dict){
    const url =  HostName + 'register'
    return setpromisePost(url,dict)
}

export const checkEmail = function(email){
    const url =  HostName + 'checkemail'
    return setpromisePost(url,{email:email})
}

export const checkUserName = function(user_name){
    const url =  HostName + 'checkusername'
    return setpromisePost(url,{user_name:user_name})
}

export const validateUser = function(code){
    const url =  HostName + 'active/' + code
    return setpromiseGet(url)
}

export const ressendemail = function(user_id){
    const url =  HostName + 'resendemail/' + user_id
    return setpromiseGet(url)
}

export const resetPasswordCode = function(mail){
    const url =  HostName + 'resetcode'
    return setpromisePost(url,{email:mail})
}

export const resetPassword = function(dict){
    const url =  HostName + 'resetpassword'
    return setpromisePost(url,dict)
}

export const getUserInfo = function(user_id){
    const url = HostName +  'user/' + user_id 
    return setpromiseGet(url)
}


export const getDynamics = function(user_id){
    const url = HostName +  'userdynamic/' + user_id 
    return setpromiseGet(url)
}

export const getUserComments = function(user_id){
    const url = HostName +  'usercomment/' + user_id 
    return setpromiseGet(url)
}



export const getTags = function(user_id){
    const url = HostName +  'tag/userid/' + user_id 
    return setpromiseGet(url)
}

export const addTag = function(tag){
    const url = HostName +  'tag/' + userId + '/' + createToken()
    return setpromisePost(url,{tag:tag})
}

export const deleteTag = function(tag){
    const url = HostName +  'tag/' + tag.tag_id + '/' + userId + '/' + createToken() 
    return setpromiseDelete(url)
}






export const getSorts = function(user_id){
    const url = HostName + 'sort/userid/' + user_id 
    return setpromiseGet(url)
}

export const addSort = function(sort){
    const url = HostName +  'sort/' + userId + '/' + createToken()
    return setpromisePost(url,{sort:sort})
}

export const deleteSort = function(sort){
    const url = HostName +  'sort/'  + sort.sort_article_id + '/' + userId + '/' + createToken() 
    return setpromiseDelete(url)
}

///api/articles/:userid/sort/:sortid/tag/:tagid/:index/:size': a





export const getUserLinks = function(id){
    const url = HostName +  'link/' + id
    return setpromiseGet(url)
}

export const updateUserLinks = function(links){
    const url = HostName +  'link/' + userId + '/' + createToken()
    return setpromisePost(url,links)
}

export const updateFriendLinks = function(link){
    const url = HostName +  'link/'+ link.link_id +'/' + userId + '/' + createToken()
    return setpromisePost(url,link)
}
export const deleteLink = function(link_id){
    const url = HostName +  'link/'+ link_id +'/' + userId + '/' + createToken()
    return setpromiseDelete(url)
}



export const updateUserInfo = function(type,data){
    const url = HostName + 'user/' +   type
    return setpromisePost(url,data)
}