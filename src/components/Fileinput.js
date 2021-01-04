import React from 'react'
import FileInputComponent from 'react-file-input-previews-base64'
export default function Fileinput() {
    return (
        <div  className="image">
            <FileInputComponent
            className ="img"
  labelText="Select file"
  labelStyle={{fontSize:14}}
  multiple={true}
  callbackFunction={(file_arr)=>{console.log(file_arr)}}
  accept="image/*" 
/>
        </div>
    )
}
