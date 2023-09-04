import { useState } from "react";
import { Box, Container, Dialog, Fab, Grid, Link, Typography } from "@mui/material";
import { Email, Phone, WhatsApp } from "@mui/icons-material";
import { phone, phone_alt, email, text } from "../mocks/mock";

export default function Footer() {
   const [dialog, setDialog] = useState({
      video: false,
   });

   const handleDialog = (obj) => {
      setDialog({
         ...dialog,
         [obj]: !dialog[obj],
      });
   };

   return (
      <>
         <Box bgcolor="#ea0d2a" mt={10}>
            <Container>
               <Grid container alignItems="center" spacing={5} pt={5} pb={10}>
                  <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" } }}>
                     <Typography variant="h4" fontWeight="bold" color="#fff">
                        Mau Pasang Indihome dengan Cepat??
                     </Typography>
                     <Typography variant="h4" fontWeight="bold" color="#fff" mb={4}>
                        Disini tempatnya!
                     </Typography>
                     <Typography variant="h4" fontWeight="bold" color="#fff" mb={4}>
                        DISKON 77% SEKARANG!
                     </Typography>
                     <Box
                        component={Link}
                        href={`https://wa.me/?phone=${phone}&text=${text}`}
                        target="_blank"
                        rel="noreferrer"
                        underline="none"
                        sx={{ display: "inline-block", background: "#fff", color: "#ea0d2a", borderRadius: 20, px: 3, py: 1 }}
                     >
                        <Typography fontWeight={500}>Daftar Sekarang</Typography>
                     </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                     <Box
                        component="img"
                        src="/assets/thumbnail.jpeg"
                        alt="Thumbnail"
                        width="100%"
                        style={{ borderRadius: 10, cursor: "pointer" }}
                        onClick={() => handleDialog("video")}
                     />
                  </Grid>
               </Grid>
            </Container>
         </Box>
         <Box bgcolor="#333" color="#fff" align="center">
            <Container align="center">
               <Box component="img" src="/assets/telkomsel.png" alt="Telkomsel" sx={{ width: { xs: "60%", md: "200px" }, py: 5 }} />
               <Grid container spacing={{ xs: 5, sm: 0 }} pb={10}>
                  <Grid item xs={12} md={4}>
                     <Box display="inline-block" component={Link} href={`tel:+${phone}`} underline="none">
                        <Fab color="error">
                           <Phone fontSize="large" />
                        </Fab>
                        <Typography color="white" pt={1}>
                           Telepon
                        </Typography>
                        <Typography variant="h6" color="white" fontWeight="bold">
                           {phone_alt}
                        </Typography>
                     </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                     <Box display="inline-block" component={Link} href={`mailto:${email}`} underline="none">
                        <Fab color="error">
                           <Email fontSize="large" />
                        </Fab>
                        <Typography color="white" pt={1}>
                           Email
                        </Typography>
                        <Typography variant="h6" color="white" fontWeight="bold">
                           {email}
                        </Typography>
                     </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                     <Box
                        display="inline-block"
                        component={Link}
                        href={`https://wa.me/?phone=${phone}&text=${text}`}
                        underline="none"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <Fab color="error">
                           <WhatsApp fontSize="large" />
                        </Fab>
                        <Typography color="white" pt={1}>
                           WhatsApp
                        </Typography>
                        <Typography variant="h6" color="white" fontWeight="bold">
                           {phone_alt}
                        </Typography>
                     </Box>
                  </Grid>
               </Grid>
            </Container>
         </Box>
         <Box bgcolor="#191919" color="#fff" align="center" p={2}>
            <Typography variant="body2">&copy; {new Date().getFullYear()} Layanan Daftar & Pasang Indihome</Typography>
         </Box>
         <Dialog open={dialog.video} onClose={() => handleDialog("video")} maxWidth="md" fullWidth>
            <div className="video-container">
               <iframe
                  width="900"
                  height="700"
                  src="https://www.youtube.com/embed/2AAVAb3QXJ8?si=YlCEVLVdzzxS8Hv4"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
               ></iframe>
            </div>
         </Dialog>
      </>
   );
}
