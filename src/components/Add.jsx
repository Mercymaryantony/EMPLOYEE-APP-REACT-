import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Add = () => {
    const [data,setData]=useState(
        {
            "NAME":"",
            "CODE":"",
            "ADD":"",
            "dob":"",
            "img":"",
            "pass":"",
            "cpass":""
        }
    )
    const inputhandler =(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue =()=>{
        console.log(data)
        axios.post("http://localhost:8081/add", data).then(
            (response)=>{
                console.log(response.log)
                if (response.data.status=="ADD") {
                    alert("SUCCESSFUL")
                } else {
                    alert("FAILED")
                }
            }
        )
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">EMPLOYEE NAME</label>
                            <input type="text" className="form-control" name='NAME' value={data.NAME} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">EMPLOYEE CODE</label>
                            <input type="text" className="form-control" name='CODE' value={data.CODe} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">ADDRESS</label>
                           <textarea name="ADD" value={data.ADD} onChange={inputhandler} id="" className="form-control"></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DOB</label>
                            <input type="date" name="dob" value={data.dob} onChange={inputhandler} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">IMAGE</label>
                            <input type="file" name="img" value={data.img} onChange={inputhandler} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PASSWORD</label>
                            <input type="password" name="pass" value={data.value} onChange={inputhandler} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                            <input type="password" name="cpass" value={data.cpass} onChange={inputhandler} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                           <button className="btn btn-primary" onClick={readValue}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add