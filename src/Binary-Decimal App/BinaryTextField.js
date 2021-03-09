import React from 'react'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    spacing: {
        marginRight: 100,
        fontSize: '4rem',
    },
})
export const BinaryTextField = ({ binaryString, handleChange }) => {
    const classes = useStyles()
    return (
        <TextField
            required
            id="standard-required"
            label="Required"
            placeholder="1010111"
            value={binaryString}
            onChange={handleChange}
            className={classes.spacing}
            inputProps={{ style: { fontSize: 45 } }} // font size of input text
        />
    )
}
