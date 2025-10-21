"use client"
import { AppBar, Box } from '@mui/material';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Container from '@mui/material/Container';
import { useHasMounted } from '@/utils/customHook';
const FooterPage = () => {

    const hasMounted = useHasMounted();

    if (!hasMounted) return (<></>)
    // console.log("===>", process.env.NEXT_PUBLIC_BACKEND_URL)

    return (
        <AppBar
            position="fixed"
            sx={{ top: 'auto', bottom: 0, backgroundColor: "#f2f2f2" }}
        >
            <Container>
                <Box sx={{
                    padding: "0px 10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",

                    ".rhap_main.rhap_stacked": {
                        flexDirection: "row",
                        alignItems: "center",

                    },
                    ".audio": {
                        width: "70%",
                        marginRight: "20px",
                    },

                }}>
                    <div className='audio'>
                        <AudioPlayer
                            style={{ boxShadow: "none", backgroundColor: "#f2f2f2" }}
                            // autoPlay
                            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                            onPlay={e => console.log("onPlay")}
                        />
                    </div>
                    <Box sx={{
                        textAlign: "center",
                        "h3": {
                            padding: "0px",
                            margin: "0px",
                            color: "#818181ff",
                        },
                        "h4": {
                            padding: "0px",
                            margin: "0px",
                            color: "#232222ff",
                        }
                    }}>
                        <h3>Sói</h3>
                        <h4>What your Name???</h4>
                    </Box>

                </Box>
            </Container>

        </AppBar >




    )
}

export default FooterPage;