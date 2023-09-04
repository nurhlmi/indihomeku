import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { phone, text } from "../mocks/mock";
import Page from "../components/Page";
import PackageCard from "../components/PackageCard";

export default function Home() {
   return (
      <Page title="Provider Internet Rumah dan Cepat">
         <Container align="center">
            <Box component="img" src="/assets/banners/KVWEB_Dsktop1650x686_D.jpeg" alt="Indihome Promo" sx={{ width: { xs: "100%", md: "850px" } }} />
            <Typography variant="h4" fontWeight="bold" color="error" mt={2}>
               Kini Daftar Indihome Menjadi Lebih Cepat & Mudah!
            </Typography>
            <Typography fontStyle="italic" color="error" mb={5}>
               *Proses cepat paket internet langsung aktif
            </Typography>
            <Button
               variant="contained"
               color="error"
               size="large"
               component={Link}
               href={`https://wa.me/?phone=${phone}&text=${text}`}
               target="_blank"
               rel="noreferrer"
            >
               Daftar Sekarang
            </Button>
            <Typography variant="h4" fontWeight="bold" mt={10} mb={1}>
               Butuh internet cepat, hemat dan kuota melimpah?
            </Typography>
            <Typography fontSize={20}>
               Untuk kamu yang tinggal di wilayah <b>Jabodetabek</b>.<br />
               Ayo daftar indihome segera…
               <br />
               Nikmati layanan internet sepuasnya dari <b>Telkom Indihome</b> untuk wilayah <b>Jabodetabek</b>.<br />
               Solusi tepat untuk kerja dan belajar dari rumah.
            </Typography>
            <Typography variant="h5" fontWeight="bold" pt={10} id="paket">
               Pilihan Paket Indihome
            </Typography>
            <Grid container spacing={3} pt={5}>
               <Grid item xs={12}>
                  <Typography variant="h6" fontWeight="bold">
                     1P Internet Only
                  </Typography>
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <PackageCard value={30} title="Paket IndiHome 1P" description="Internet Only" price={280000} />
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <PackageCard value={30} title="Paket IndiHome 1P" description="Internet + Disney Hotstar" price={295000} />
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <PackageCard value={40} title="Paket IndiHome 1P" description="Internet Only" price={310000} />
               </Grid>
            </Grid>
            <Grid container spacing={3} pt={10}>
               <Grid item xs={12}>
                  <Typography variant="h6" fontWeight="bold">
                     2P Internet + Phone
                  </Typography>
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <PackageCard value={30} title="Paket IndiHome 2P" description="Internet + Phone" price={315000} />
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <PackageCard value={50} title="Paket IndiHome 2P" description="Internet + Phone" price={445000} />
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <PackageCard value={100} title="Paket IndiHome 2P" description="Internet + Phone" price={795000} />
               </Grid>
            </Grid>
            <Grid container spacing={3} pt={10}>
               <Grid item xs={12}>
                  <Typography variant="h6" fontWeight="bold">
                     2P Internet + TV
                  </Typography>
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <PackageCard value={30} title="Paket IndiHome 2P" description="Internet + TV" price={370000} />
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <PackageCard value={50} title="Paket IndiHome 2P" description="Internet + TV" price={595000} />
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <PackageCard value={100} title="Paket IndiHome 2P" description="Internet + TV" price={945000} />
               </Grid>
            </Grid>
            <Grid container spacing={3} pt={10}>
               <Grid item xs={12}>
                  <Typography variant="h6" fontWeight="bold">
                     3P Internet + TV + Phone
                  </Typography>
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <PackageCard value={30} title="Paket IndiHome 3P" description="Internet + TV + Phone" price={385000} />
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <PackageCard value={50} title="Paket IndiHome 3P" description="Internet + TV + Phone" price={615000} />
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <PackageCard value={100} title="Paket IndiHome 3P" description="Internet + TV + Phone" price={965000} />
               </Grid>
            </Grid>
            <Button size="large" variant="contained" color="error" component={RouterLink} to="semua-paket" sx={{ my: 5 }}>
               Lihat Semua Paket
            </Button>
         </Container>
      </Page>
   );
}
