import React from 'react'
import { TextField } from '@material-ui/core'

export const DecimalTextField = ({ decimal }) => {
    return (
        <TextField
            required
            id="standard-required"
            label="Not required"
            placeholder="47"
            value={decimal ? decimal : ''}
            inputProps={{ style: { fontSize: 45 } }} // font size of input text
        />
    )
}
