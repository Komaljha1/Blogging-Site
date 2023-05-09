import React from 'react';
import { AppBar, Toolbar, Box, Typography} from '@mui/material';
import { styled } from '@mui/system';

const Nav = styled(AppBar)({
    // height: "110px",
    // background: "inherit",

    "& .MuiToolbar-root": {
        height: "40px",

        "&:nth-child(1)": {
            // background: "linear-gradient(26deg,  #ff57223b 20%, #ef7035 )",
            background: "black",

        },
        "&:nth-child(2)": {
            justifyContent: "space-between",
        },

        "& .MuiTypography-h6": {
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: 'small',
            fontWeight: '500',
            color: 'white',
        }
    },

    "& .MuiBox-root": {
        marginRight: '30px',

        "& .MuiLink-root": {

            color: 'black',
            textDecoration: 'none',

            "&:nth-child(1)": {
                marginRight: '30px',
            },
            "&:nth-child(2)": {
                marginRight: '-2px',
            },
        }
    },

    "& img": {
        marginLeft: "39px",
        marginTop: "9px",
        height: "50px",
    }
})

const Header = () => (
        <>
            <Nav color="inherit" position="sticky">
                <Toolbar>
                <Box><img src="/Blog-icon.png" alt="logo" /></Box>
                    <Typography variant='h6' sx={{ color: "black" }}   >
                        Beginner's Guide for WordPress / Start your WordPress Blog in minutes
                    </Typography>
                </Toolbar>     
            </Nav>
        </>
    )

export default Header;