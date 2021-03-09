import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { DecimalTextField } from './DecimalTextField'
import { BinaryTextField } from './BinaryTextField'

const useStyles = makeStyles({
    root: {
        height: '100vh',
    },

    h1Style: {
        marginTop: 80,
        fontWeight: 800,
    },

    textFieldSpacing: {
        marginBottom: 400,
    },

    textSpacing: {
        marginTop: 20,
    },

    footerStyle: {
        position: 'relative',
    },
})

export const Converter = () => {
    const classes = useStyles()
    // States
    const [binaryString, setBinaryString] = useState('')
    /* const [binary, setBinary] = useState([]) */
    const [decimal, setDecimal] = useState('')
    //Handlers
    const handleChange = (event) => {
        setBinaryString(event.target.value)
        setDecimal(parseInt(event.target.value, 2))
    }

    const checkForZeroAndOne = (string) => {
        if (!string) {
            return true
        }

        return string.split('').every((character) => {
            const number = Number(character)

            return number === 1 || number === 0
        })
    }

    const hasValidNumbers = checkForZeroAndOne(binaryString)

    return (
        <div className={classes.root}>
            <Grid container justify="center" alignItems="center">
                <Typography
                    className={classes.h1Style}
                    variant="h1"
                    component="h2"
                    gutterBottom
                    color="primary"
                >
                    Binary To Decimal Converter
                </Typography>
            </Grid>
            <Grid
                container
                className={classes.root}
                spacing={0}
                justify="center"
                alignItems="center"
                direction="column"
            >
                <Grid item className={classes.textFieldSpacing}>
                    <BinaryTextField
                        binaryString={binaryString}
                        handleChange={handleChange}
                    />{' '}
                    <DecimalTextField decimal={decimal} />
                    <Typography
                        style={{ color: hasValidNumbers ? 'initial' : 'red' }}
                        className={classes.textSpacing}
                        variant="body1"
                    >
                        Only the binary values of 1 or 0 are possible to enter
                    </Typography>
                </Grid>
                <footer className={classes.footerStyle}>
                    &copy; Created By Scott Pessoa ❤️
                </footer>
            </Grid>
        </div>
    )
}
