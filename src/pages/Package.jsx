import { Box, Container, Typography } from "@mui/material";
import Page from "../components/Page";

export default function Package() {
   return (
      <Page title="Paket Internet Cepat Unlimited IndiHome untuk Wifi Rumah dan TV Berlangganan">
         <Container align="center">
            <Typography variant="h4" fontWeight="bold" mt={5} color="error" gutterBottom>
               PAKET INDIHOME
            </Typography>
            {/* <Typography color="text.secondary" mb={5}>
               (NB : Harga belum termasuk ppn 10% dan materai Rp 3.000)
            </Typography> */}
            <Box component="img" src="/assets/banners/FLYER_JITU1_2-SF Area 2_page-0002.jpg" alt="Indihome Promo" sx={{ width: { xs: "100%", md: "800px" } }} />
         </Container>
      </Page>
   );
}
