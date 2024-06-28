import { createTheme, ThemeProvider, makeStyles, rgbToHex } from '@mui/material/styles'
import { styled } from '@mui/material/styles'

import Typography from '@mui/material/Typography'
import { useIntl } from "react-intl"
import Container from '@mui/material/Container'
import {Stack, Box, Link} from '@mui/material'


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
                <StackContainer direction="column" justifyContent="center" alignItems="center" spacing={4}>
					<Box>
						<Typography variant="h4" sx={{color: '#FFFFFF', textAlign: 'center'}}>
							{ intl.formatMessage({id: 'platform.daemon.title1'})}
						</Typography>
						<Typography variant="h4" sx={{color: '#FFFFFF', textAlign: 'center'}}>
							{ intl.formatMessage({id: 'platform.daemon.title2'})}
						</Typography>
					</Box>
                    <Box>
						<Typography variant="h5" sx={{color: '#FFFFFF', textAlign: 'center'}}>
							Open CoNET Platform locally
						</Typography>

					</Box>
					<Box>
						<Link href="http://localhost:3000" target="_blank" rel="noopener">http://localhost:3000</Link>
					</Box>
                </StackContainer>
            </RootContainer>
        </ThemeProvider>
    )
}

export default deamon