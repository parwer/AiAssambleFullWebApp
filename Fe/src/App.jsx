import { useEffect, useState } from 'react'
import { NavbarTab } from './Components/NavbarTab'
import { isLogedIn, logoutSystem } from './Commands/LoginSystem'
import { Box, Container, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Cards } from './Components/Cards'

function App() {
    const [ items, setItems ] = useState({});
    const [ isLoading, setIsloading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/MOCK_DATA.json");
                const jsonData = await res.json();
                setItems(jsonData);
                setIsloading(false);
            }catch (err) {
                console.log(err);
            }
        }

        fetchData()
    }, [])

    if (isLoading) {
        return  (
            <Typography>
                Loading...
            </Typography>
        )
    }

    const mutiCard = items.map((item) => (
        <Cards key={item.Id} Description={item.Item_name} Price={item.Price} Out={item.Out} Image={item.Image}/>
    ))

    console.log(items)


    var isLogin = isLogedIn();
    return (
        <Box>
            <NavbarTab isLogin={isLogin.token} username={isLogin.username} />

            <Container>
                <Grid2 container>
                    <Grid2
                        xs={2}
                        sx={{
                            border: "1px solid black"
                        }}
                    >
                        1234
                    </Grid2>
                    <Grid2
                        xs={10}
                        sx={{
                            border: "1px solid black"
                        }}
                    >
                        {mutiCard}
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}

export default App
