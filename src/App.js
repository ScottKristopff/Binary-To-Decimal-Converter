import { Container, Box } from '@material-ui/core'
import { Converter } from './Binary-Decimal App/Converter'
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles({
    body: {
        height: '100vh',
        margin: 0,
        padding: 0,
    },
})

export const App = () => {
    const classes = useStyles()
    return (
        <div className={classes.body}>
            <Container>
                <Box>
                    <Converter />
                </Box>
            </Container>
        </div>
    )
}

//mt = MarginTop
