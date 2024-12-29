import Card from "./Card";
import React, { Component } from 'react'

function AdopeterData({ formData, handleGoBack }){
    return(
        
    <div>
       <Card>
             <table>
                <thead>
                  <tr>
                    <th>Pet Name</th>
                    <th>Pet Type</th>
                    <th>Bread</th>
                    <th>Adopeter Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                   </tr>
                </thead>
                <tbody>
                    {formData.map((data,index) =>(
                        <tr key={index}>
                        <th>{data.petName}</th>
                        <th>{data.petType} </th>
                        <th>{data.bread} </th>
                        <th>{data.adopeterName}</th>
                        <th>{data.email} </th>
                        <th>{data.phone} </th>
                    </tr>
                    ))}
                </tbody>
             </table>
             <div style={{ marginTop: "20px", textAlign: "center" }}>
                <button
                    onClick={handleGoBack}
                    style={{
                        padding: "10px 20px",
                        boxSizing: "border-box",
                        width: "auto",
                        display: "inline-block"
                    }}
                >
                    Go Back
                </button>
            </div>
       </Card>
    </div>

    )
}

export default AdopeterData;