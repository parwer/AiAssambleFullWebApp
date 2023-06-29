import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"

export const Cards = (props) => {
    return (
        <Card sx={{
            width: 175,
            height: 275,
            display: "inline-block",
            marginRight: "10px",
            marginBottom: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            overflow: "hidden",
            transition: "transform 0.3s ease-in-out",
            ":hover": {
                transform: "scale(1.05)",
            },
        }}>
            <CardMedia
                sx={{ height: 140 }}
                image={props.Image}
            />
            <CardContent sx={{ padding: "16px", display: "block" }}>
                <Box
                    component="div"
                    sx={{ height: "50px", textOverflow: "ellipsis", overflow: "hidden" }}
                >
                    <Typography variant="body1">{props.Description}</Typography>
                </Box>
                <Box>
                    <Typography variant="body2" sx={{ flexGrow: 1 }}>${props.Price}</Typography>
                    <Typography variant="body2">Out {props.Out}</Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

