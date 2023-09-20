/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Container, Grid, Link, Stack, Typography } from "@mui/material";
import { phone, text } from "../mocks/mock";
import { Link as RouterLink } from "react-router-dom";
import PackageCard from "../components/PackageCard";
import packages from "../mocks/packages.json";
import Page from "../components/Page";
import axios from "../variable/axios";

export default function Home() {
   const [data, setData] = useState();

   const getData = async () => {
      const res = await axios.get(`data.json`);
      return res.data.data;
   };

   useEffect(() => {
      Promise.all([getData()])
         .then((res) => {
            // console.log(data);
            setData(res);
         })
         .catch(() => {
            setData(packages);
         });
   }, []);

   return (
      <Page title="Provider Internet Rumah dan Cepat">
         <Container align="center">
            <Box component="img" src="/assets/banners/FLYER_JITU1_2-SF Area 2_page-0001.jpg" alt="Indihome Promo" sx={{ width: { xs: "100%", sm: "550px" } }} />
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
            <Typography variant="h4" fontWeight="bold" pt={10} id="paket">
               Pilihan Paket Indihome
            </Typography>
            {data ? (
               data.data.map((value, index) => (
                  <Grid container spacing={3} key={index} mt={5}>
                     <Grid item xs={12}>
                        <Typography variant="h5" fontWeight="bold">
                           {value.name}
                        </Typography>
                     </Grid>
                     {value.packages.map((row, key) => (
                        <Grid item xs={12} sm={6} md={4} key={key}>
                           <PackageCard title={value.name} value={row} />
                        </Grid>
                     ))}
                  </Grid>
               ))
            ) : (
               <Stack direction="row" alignItems="center" justifyContent="center" py={10}>
                  <CircularProgress color="error" />
               </Stack>
            )}
            <Button size="large" variant="contained" color="error" component={RouterLink} to="semua-paket" sx={{ my: 5 }}>
               Lihat Semua Paket
            </Button>
         </Container>
      </Page>
   );
}
