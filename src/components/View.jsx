import React, { useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    const [data,changedata]=useState(
        [
            {"NAME":"MARK","CODE":"M1205","ADD":"IJK"},
            {"NAME":"MIKE","CODE":"M1205","ADD":"ERK"},
            {"NAME":"JACOB","CODE":"M1205","ADD":"IJK"},
            {"NAME":"JOHAN","CODE":"M1205","ADD":"ERK"},
            {"NAME":"ORNALD","CODE":"M1205","ADD":"IJK"},
            {"NAME":"MIKE","CODE":"M1205","ADD":"ERK"},
            {"NAME":"OTTO","CODE":"M1205","ADD":"IJK"}
        ]
    )
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">EMPLOYEE NAME</th>
                                    <th scope="col">EMPLOYEE CODE</th>
                                    <th scope="col">ADDRESS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value,i) =>
                                        {
                                            return <tr>
                                            <th scope="row">{value.NAME}</th>
                                            <td>{value.CODE}</td>
                                            <td>{value.ADD}</td>
                                            
                                        </tr>
                                        }
                                )

                                }
                           
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View