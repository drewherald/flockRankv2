import { Box, Typography } from "@mui/material";
import "../assets/styles/pages/home.css";
import "../assets/styles/pages/photos.css";
import boulder1 from '../assets/images/photoGal/boulder1.jpg'
import boulder2 from   '../assets/images/photoGal/boulder2.jpg'
import broomfield1 from   '../assets/images/photoGal/broomfield1.jpg'
import broomfield2 from   '../assets/images/photoGal/broomfield2.jpg'
import cap1 from    '../assets/images/photoGal/cap1.jpg'
import cap2 from   '../assets/images/photoGal/cap2.jpg'
import cincy1 from   '../assets/images/photoGal/cincy1.jpg'
import cincy2 from   '../assets/images/photoGal/cincy2.jpg'
import cleveland1 from   '../assets/images/photoGal/cleveland1.jpg'
import cleveland2 from   '../assets/images/photoGal/cleveland2.jpg'
import cleveland3 from   '../assets/images/photoGal/cleveland3.jpg'
import hampton1 from   '../assets/images/photoGal/hampton1.jpg'
import hampton2 from   '../assets/images/photoGal/hampton2.jpg'
import kemba1 from   '../assets/images/photoGal/kemba1.jpg'
import kemba2 from   '../assets/images/photoGal/kemba2.jpg'
import lex1 from   '../assets/images/photoGal/lex1.jpg'
import nash1 from  '../assets/images/photoGal/nash1.jpg'
import nash2 from  '../assets/images/photoGal/nash2.jpg'
import okee1 from   '../assets/images/photoGal/okee1.jpg'
import okee2 from   '../assets/images/photoGal/okee2.jpg'
import okee3 from   '../assets/images/photoGal/okee3.jpg'
import scamp1 from  '../assets/images/photoGal/scamp1.jpg'
import vail1 from  '../assets/images/photoGal/vail1.jpg'
import vail2 from  '../assets/images/photoGal/vail2.jpg'

//import images

const images: string[][] = [
[boulder1, 'Orebolo 12.14.22 Boulder CO'], [boulder2, 'Orebolo 12.14.22 Boulder CO'], 
[broomfield1, 'Goose 12.16.22 Broomfield CO'], [broomfield2, 'Goose 12.16.22 Broomfield CO'], 
[cap1, 'Orebolo 02.10.2024 Port Chester NY'], [cap2, 'Orebolo 02.10.2024 Port Chester NY'], 
[cincy1, 'Goose 12.31.22 Cincinatti OH'], [cincy2, 'Goose 12.30.22 Cincinatti OH'], 
[cleveland1, 'Goose 03.26.2023 Cleveland OH'], [cleveland2, 'Goose 03.26.2023 Cleveland OH'], 
[cleveland3, 'Goose 03.26.2023 Cleveland OH'], [hampton1, 'Goose 12.09.2023 Hampton VA'],
[hampton2, 'Goose 12.09.2023 Hampton VA'], [kemba2, 'Goose 06.27.2023 Columbus OH'], 
[lex1, 'Goose 06.04.2023 Lexington KY'], [nash2, 'Goose 03.30.2023 Nashville TN'], 
[kemba1, 'Goose 06.27.2023 Columbus OH'], [nash1, 'Goose 03.30.2023 Nashville TN'],  
[okee1, 'Goose 03.03.2023 Okeechobee FL'], [okee2, 'Goose 03.03.2023 Okeechobee FL'], 
[okee3, 'Goose 03.03.2023 Okeechobee FL'], [scamp1, 'Goose 05.26.2023 Chillicothe, IL'], 
[vail1, 'Orebolo 06.09.2023 Vail CO'], [vail2, 'Orebolo 06.09.2023 Vail CO']
]


export default function Photos() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr 1fr",
        gap: "10px",
        backgroundColor: "#008080",
        padding: "10px 0",
        minHeight: "80svh",
      }}
    >
      <Box sx={{ backgroundColor: "#008080" }}></Box>
      <Box>
        <Typography
          variant="h4"
          className="welcomeToFR"
          sx={{
            padding: "10px 0 20px 0",
            backgroundColor: "#008080",
            fontFamily: `'Tahoma', 'ms_sans_serif'`,
            display: "flex",
            flexDirection: 'column',
          }}
        >
          {" "}
          Photo Gallery{" "}
        </Typography>
          <Box className='photoContainer'>
          {images.map((image) => <div className="galDiv"><img src={image[0]} className="galPhoto" alt={image.toString()} ></img><Typography className="galText" sx={{zIndex: '1'}}>{image[1]}</Typography></div>)}
          </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}

