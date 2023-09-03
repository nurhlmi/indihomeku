import PropTypes from "prop-types";
import { forwardRef } from "react";
import { Box, Fab, Link } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import { phone, text } from "../mocks/mock";
import ScrollToTop from "./ScrollToTop";
import Header from "./Header";
import Footer from "./Footer";

// eslint-disable-next-line react/display-name
const Page = forwardRef(({ children, title = "", meta, ...other }, ref) => (
   <>
      <ScrollToTop />

      <Helmet>
         <title>{`${title} - Indihome`}</title>
         {meta}
      </Helmet>

      <Header />

      <Box ref={ref} {...other}>
         {children}
      </Box>

      <Fab
         size="large"
         color="success"
         sx={{ position: "fixed", bottom: 25, right: 25 }}
         component={Link}
         href={`https://wa.me/?phone=${phone}&text=${text}`}
         target="_blank"
         rel="noreferrer"
      >
         <WhatsApp fontSize="large" />
      </Fab>

      <Footer />
   </>
));

Page.propTypes = {
   children: PropTypes.node.isRequired,
   title: PropTypes.string,
   meta: PropTypes.node,
};

export default Page;
