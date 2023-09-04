import { Box, Button, Card, CardContent, Link, Typography } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import ReactApexChart from "react-apexcharts";
import { phone } from "../mocks/mock";

export default function PackageCard(props) {
   const { value, title, description, price } = { ...props };
   const text = encodeURIComponent(`Halo Admin.. Saya ingin berlangganan ${title} (${value}Mbps) (${description})`);
   const chart = {
      series: [value],
      options: {
         chart: {
            height: 350,
            type: "radialBar",
         },
         fill: {
            colors: ["#ea0d2a"],
         },
         plotOptions: {
            radialBar: {
               hollow: {
                  margin: 0,
                  size: "70%",
                  background: "#fff",
                  image: undefined,
                  imageOffsetX: 0,
                  imageOffsetY: 0,
                  position: "front",
               },
               dataLabels: {
                  show: true,
                  name: {
                     offsetY: -30,
                     show: true,
                     color: "#888",
                     fontSize: "17px",
                  },
                  value: {
                     offsetY: 3,
                     formatter: function (val) {
                        return `${parseInt(val)}`;
                     },
                     color: "#ea0d2a",
                     fontSize: "50px",
                     show: true,
                  },
               },
            },
         },
         stroke: {
            lineCap: "round",
         },
         labels: [`up to`, "Mbps"],
      },
   };
   return (
      <Card sx={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)" }}>
         <CardContent align="center" sx={{ px: 3 }}>
            <Box position="relative">
               <ReactApexChart type="radialBar" options={chart.options} series={chart.series} />
               <Typography
                  fontWeight="bold"
                  color="#888"
                  sx={{
                     position: "absolute",
                     top: "60%",
                     left: 0,
                     right: 0,
                     margin: "0 auto",
                  }}
               >
                  &nbsp;Mbps
               </Typography>
            </Box>
            <Typography variant="h6" fontWeight="bold">
               {title}
            </Typography>
            <Typography height={75}>({description})</Typography>
            <Typography fontWeight="bold" mb={2}>
               Rp <span style={{ fontSize: 27 }}>{new Intl.NumberFormat("id-ID").format(price)}</span> /Bulan
            </Typography>
            <Button
               size="large"
               color="error"
               variant="contained"
               sx={{ mb: 2 }}
               startIcon={<WhatsApp />}
               component={Link}
               href={`https://wa.me/?phone=${phone}&text=${text}`}
               target="_blank"
               rel="noreferrer"
               fullWidth
            >
               Pilih Paket
            </Button>
            <Typography variant="caption" color="text.secondary">
               S&K Berlangganan Indihome Official Berlaku
            </Typography>
         </CardContent>
      </Card>
   );
}
