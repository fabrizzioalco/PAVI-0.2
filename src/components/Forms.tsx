import React, {useState} from 'react';
import {Grid, GridList} from "@material-ui/core";


interface FormData {
    video: File,
    configuration: File,
    algorithm: string
}
const Forms = () => {
    const algoritms = ["YOLO", "OpenVino"]
    const [formData, setFormDate] = useState();
    const style = {
        alignContent :'center'
    }
    return(
        <>
              <form>
                <Grid>
                  <input id="video" type="File"></input>
                  <input id="video" type="File"></input>
                  <select>
                  <option>Algortihms</option>
                  {algoritms.map(item =>(
                      <option key={item} id={item} value={item}>{ item }</option>
                  ))}
                  </select>
                </Grid>
              </form>
        </>
    )
}

export default Forms;