import instanceBackend from "../../../Proxy/InstanceBackend";

const headers = {
  'Content-Type': 'application/json',
};





//     console.log(headers);
//     const response = await axios.get(
//       `${instance_url}/services/data/v35.0/tooling/query/?q=SELECT+Id,ValidationName,Active,Description,EntityDefinition.DeveloperName,ErrorDisplayField,ErrorMessage+FROM+ValidationRule`,
//       {
//         headers: headers,
//       }
//     );
//     console.log(response)
//     if(response.status==200) {
//       return response;
//     }
//     throw new Error(response);
    

//   } catch (error) {
//     console.error("Error fetching validation rules:", error);
//     throw error;
//   }
// };
export const getValidation=async(isLogin)=>{
 console.log(isLogin)
 const response=await instanceBackend.post(`/getAllValidation`,isLogin,headers) 
 console.log(response);
 if(response.status==200) {
  return response;
 }
 throw Error(response);
}

export const patchByIdValidation = async (items) => {
  const {data,isLogin}=items
  const{token,instance_url}=isLogin;
  try{
  const response=await instanceBackend.patch("/deployData",items,headers);
  console.log(response)
  return response;
  }
  catch(e){
    throw Error(e);
  }
};


