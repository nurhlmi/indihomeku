import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Button, Typography, Container } from "@mui/material";
// components
import Page from "../components/Page";

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(() => ({
   maxWidth: 600,
   margin: "auto",
   minHeight: "60vh",
   display: "flex",
   justifyContent: "center",
   flexDirection: "column",
}));

// ----------------------------------------------------------------------

export default function Page404() {
   return (
      <Page title="Halaman Tidak Ditemukan">
         <Container>
            <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
               <Typography variant="h1" fontWeight="bold" paragraph>
                  404
               </Typography>

               <Typography variant="h4" paragraph>
                  Halaman Tidak Ditemukan
               </Typography>

               <Typography sx={{ color: "text.secondary" }} mb={5}>
                  Halaman yang Anda cari mungkin telah dipindah atau dihapus.
               </Typography>

               <Button to="/" size="large" variant="contained" component={RouterLink} color="error">
                  Kembali
               </Button>
            </ContentStyle>
         </Container>
      </Page>
   );
}
