import React from "react";
 import { AppBar, Box, Button, Container, IconButton, Link, Toolbar } from '@mui/material';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ViewListIcon from '@mui/icons-material/ViewList';
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

const Topbar: React.FC = () => {
return (
    <AppBar
            elevation={0}
            sx={{
                backgroundColor: 'background.paper',
                borderBottomColor: 'divider',
                borderBottomStyle: 'solid',
                borderBottomWidth: 1,
                color: 'text.secondary'
            }}
        >
            <Container maxWidth="lg">
                <Toolbar
                    disableGutters
                    sx={{ minHeight: 64 }}
                >
                    <NextLink
                        href="/"
                        passHref
                    >
                        <a>
                            <PersonOutlineIcon />
                        </a>
                    </NextLink>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton
                        color="inherit"
                        // onClick={any}
                        sx={{
                            display: {
                                md: 'none'
                            }
                        }}
                    >
                        <ViewListIcon fontSize="small" />
                    </IconButton>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: {
                                md: 'flex',
                                xs: 'none'
                            }
                        }}
                    >
                        <NextLink
                            href="/dashboard"
                            passHref
                        >
                            <Link
                                color="textSecondary"
                                underline="none"
                                variant="subtitle2"
                            >
                                Login
                            </Link>
                        </NextLink>
                        <NextLink
                            href="/browse"
                            passHref
                        >
                            <Link
                                color="textSecondary"
                                sx={{ ml: 2 }}
                                underline="none"
                                variant="subtitle2"
                            >
                                Components
                            </Link>
                        </NextLink>
                        <NextLink
                            href="/docs/welcome"
                            passHref
                        >
                            <Link
                                color="textSecondary"
                                component="a"
                                sx={{ ml: 2 }}
                                underline="none"
                                variant="subtitle2"
                            >
                                Documentation
                            </Link>
                        </NextLink>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

);
}
export default Topbar;