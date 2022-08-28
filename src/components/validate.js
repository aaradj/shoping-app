export const validate=data=>{
    const errors={};
    const filter=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const filterP=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
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
    if(!data.email){
        errors.email="Email is required";
        data.checked=false;
    }else if(!filter.test(data.email)){
        errors.email="please enter your valid email !";
        data.checked=false;
    }else{
        delete errors.email;
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
    if(!data.phoneNum){
        errors.phoneNum="phone number is required";
        data.checked=false;
    }else if(!filterP.test(data.phoneNum)){
        errors.phoneNum="Phone number is not valid";
        data.checked=false;
    }else{  
        delete errors.phoneNum;
        data.checked=true;
    }
    return errors;
};