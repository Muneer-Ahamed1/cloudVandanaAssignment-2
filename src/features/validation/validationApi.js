import instanceBackend from "../../../Proxy/InstanceBackend";

const headers = {
  'Content-Type': 'application/json',
};






export const getValidation=async(isLogin)=>{
 console.log(isLogin)
 const response=await instanceBackend.post(`/getAllValidation`,isLogin,headers) 
 console.log(response);
 if(response.status==200) {
  return response;
 }
 throw Error(response);
}

export const dumpGetValidation=async(isLogin)=>{
  console.log(isLogin)
  const response=await instanceBackend.post(`/getAllValidation`,isLogin,headers) 
  console.log(response);
  if(response.status==200) {
   return response;
  }
  return response;
 }

export const patchByIdValidation = async (items) => {
  const {data,isLogin}=items
  const{token,instance_url}=isLogin;
  try{
  const response=await instanceBackend.patch("/deployData",items,headers);
  console.log(response)
  if(response.status==200) {
  return response;
  }
  throw new Error(response);
  }
  catch(e){
    throw Error(e);
  }
};


