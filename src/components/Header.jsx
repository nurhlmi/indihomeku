import { Box, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
   return (
      <Stack alignItems="center" component={RouterLink} to="/">
         <Box component="img" src="/assets/indihome.png" alt="Indihome Fiber" sx={{ width: { xs: "50%", md: "450px" } }} />
      </Stack>
   );
}
