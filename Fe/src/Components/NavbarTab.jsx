import { AppBar, Box, Button, Container, Link, Menu, MenuItem, ThemeProvider, Toolbar, Typography } from "@mui/material"
import { logoutSystem } from "../Commands/LoginSystem"
import { AccountCircle, MenuOutlined } from "@mui/icons-material"
import { NavbarTheme } from "../Themes/NavbarTheme"
import { useState } from "react"



export const NavbarTab = (props) => {
    const [showMenu, setShowMenu] = useState(null);
    const handleLogout = () => {
        setShowMenu(null);
        logoutSystem();
    }

    return (
        <ThemeProvider theme={NavbarTheme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ marginBottom: "20px" }}>
                    <Container>
                        <Toolbar>
                            <Box sx={{ flexGrow: 1 }}>
                                <Button color="inherit">
                                    <Link href="/" color="inherit" underline="none" variant="h6">
                                        Home
                                    </Link>
                                </Button>
                            </Box>
                            <Box>
                                {props.isLogin ? (
                                    <Box>
                                        <Typography
                                            sx={{
                                                display: "inline-block",
                                                color: "inherit",
                                            }}
                                            variant="body1"
                                        >
                                            <Link
                                                href="/"
                                                color="inherit"
                                                underline="none"
                                            >
                                                Sell
                                            </Link>
                                        </Typography>
                                        <Button
                                            color="inherit"
                                            onClick={(e) => setShowMenu(e.currentTarget)}
                                            sx={{
                                                marginLeft: 2
                                            }}
                                        >
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <Typography
                                                    variant="body1"
                                                    component="div"
                                                    color="inherit"
                                                    noWrap
                                                    sx={{ marginRight: "5px" }}
                                                >
                                                    {props.username}
                                                </Typography>
                                                <AccountCircle color="inherit" />
                                            </Box>
                                        </Button>
                                        <Menu
                                            anchorEl={showMenu}
                                            open={Boolean(showMenu)}
                                            onClose={() => setShowMenu(null)}
                                            MenuListProps={{
                                                "aria-labelledby": "basic-button",
                                            }}
                                        >
                                            <MenuItem onClick={() => setShowMenu(null)}>Profile</MenuItem>
                                            <MenuItem onClick={() => setShowMenu(null)}>History</MenuItem>
                                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                        </Menu>
                                    </Box>
                                ) : (
                                    <Button color="inherit">
                                        <Link
                                            href="login"
                                            color="inherit"
                                            underline="none"
                                            variant="h6"
                                        >
                                            Login
                                        </Link>
                                    </Button>
                                )}
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </ThemeProvider>

    )
}