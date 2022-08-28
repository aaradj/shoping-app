import React,{ useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { validate } from './validate';
import styles from "./signup.module.css";

const SignUp = () => {
    const [data,setData]=useState({
        userName:"",
        email:"",
        password:"",
        phoneNum:"",
        checked:false
    });
    const [errors,setErrors]=useState({});
    const changeHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})  
    };
    const {userName,email,password,phoneNum}=data;
    useEffect(()=>{
        setErrors(validate(data),{
            userName:true,
            email:true,
            password:true,
            phoneNum:true,
            checked:false,
        });
    },[data]);
    const submitHandler=event=>{
        event.preventDefault();
        if(data.checked===false){
            console.log(data.checked)
        }else{
            console.log(data.checked)
        }
    }
    return (

        <div className={styles.container}>
            <h2 className={styles.title}>Sign Up</h2>
            <form onSubmit={submitHandler}>

                <div className={styles.input}>
            <input type="text" name="userName" value={userName} onChange={changeHandler} placeholder="User Name" autoFocus/>
            <span>{errors.userName && <p>{errors.userName}</p>}</span>
                </div>

                <div className={styles.input}>
            <input type="email" name="email" value={email} onChange={changeHandler} placeholder="Email addres"  />
            <span>{errors.email && <p>{errors.email}</p>}</span>
                </div>

                <div className={styles.input}>
            <input type="password" name="password" value={password} onChange={changeHandler} placeholder="Password"/>
            <span>{errors.password && <p>{errors.password}</p>}</span>
                </div>

                <div className={styles.input}>
            <input type="text" name="phoneNum" value={phoneNum} onChange={changeHandler} placeholder="phone number"/>
            <span>{errors.phoneNum && <p>{errors.phoneNum}</p>}</span>
                </div>

                <div className={styles.buttons}>
                    <button type="submit">Sign Up</button>
                    <Link to="/login">Login</Link>
                    <Link to="/home">Back</Link>
                </div>
                <div className={styles.msg}>
                <span>{data.checked && <p>Welcom to Light Web {data.userName}</p>}</span>
                <span>{data.checked===false && <p>Data is not valid</p>}</span>
                </div>
            </form>
           </div>

    );
};

export default SignUp;