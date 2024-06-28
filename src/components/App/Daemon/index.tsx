import { createTheme, ThemeProvider, makeStyles, rgbToHex } from '@mui/material/styles'
import { styled } from '@mui/material/styles'

import Typography from '@mui/material/Typography'
import { useIntl } from "react-intl"
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'


const themeTopArea1 = createTheme ({
    typography: {
        h3: {
            'fontWeight': '600'
        },
        h4: {
            'fontWeight': '600'
        },
        h6: {
            color: 'rgba(0,0,0,0.6)'
        },
        fontFamily: [
            'Inter',
            '"Inter Placeholder"',
            'sans-serif',
        ].join(','),
    },
})

const StackContainer = styled(Stack)(() => ({
    height: '100vh'
}))

const RootContainer = styled(Container)(() => ({
    height: '100vh'
}))


const deamon = () => {
    const intl = useIntl()

    return (
        <ThemeProvider theme={themeTopArea1}>
            <RootContainer maxWidth="md">
                <StackContainer direction="column" justifyContent="center" alignItems="center">
                    
                    <Typography variant="h4" sx={{color: '#448aff', textAlign: 'center'}}>
                        { intl.formatMessage({id: 'platform.daemon.title'})}
                    </Typography>
                </StackContainer>
            </RootContainer>
        </ThemeProvider>
    )
}

export default deamon