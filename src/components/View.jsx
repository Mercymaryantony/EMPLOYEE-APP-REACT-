import React from 'react'
import Navbar from './Navbar'

const View = () => {
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
                                <tr>
                                    <th scope="row">MARK</th>
                                    <td>M1250</td>
                                    <td>IJK</td>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">OTTO</th>
                                    <td>O1541</td>
                                    <td>ERK</td>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">MICHEAL</th>
                                    <td>M1250</td>
                                    <td>IJK</td>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">ORNALD</th>
                                    <td>O1541</td>
                                    <td>ERK</td>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">JACOB</th>
                                    <td>M1250</td>
                                    <td>IJK</td>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">THORTON</th>
                                    <td>O1541</td>
                                    <td>ERK</td>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">MIKE</th>
                                    <td>M1250</td>
                                    <td>IJK</td>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">ORWELL</th>
                                    <td>O1541</td>
                                    <td>ERK</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View