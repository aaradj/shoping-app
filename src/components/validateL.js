export const validate=data=>{
    const errors={};
    if(data.userName===""){
        errors.userName="user name is required";
        data.checked=false;
    } else if(data.userName.length<4) {
        errors.userName="your username should be 4character or more";
        data.checked=false;
    }else{
        delete errors.userName;
        data.checked=true;
    
    }   
    if(!data.password){
        errors.password="password is required";
        data.checked=false;
    }else if(data.password.length<6) {
        errors.password="your password should be 6character or more";
        data.checked=false;
    }else{
        delete errors.password;
        data.checked=true;
    }
    return errors;
};