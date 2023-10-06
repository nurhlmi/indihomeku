import { Box, Button, Card, CardContent, Link, Stack, Typography } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import ReactApexChart from "react-apexcharts";
import { phone } from "../mocks/mock";

export default function PackageCard(props) {
   const { title, value } = { ...props };
   const text = encodeURIComponent(
      `Halo admin, saya mau tanya untuk ${title} kecepatan ${value.speed} Mbps dengan biaya ${new Intl.NumberFormat("id-ID").format(
         value.promo > 0 ? value.promo.toString().substr(0, 3) : value.price.toString().substr(0, 3)
      )}rb/bulan`
   );
   const chart = {
      series: [value.speed],
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
      <Card sx={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", height: "100%", position: "relative" }}>
         {value.promo > 0 && <img src="/assets/promo.png" width={100} style={{ position: "absolute", right: -5, top: -5 }} />}
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
            <Typography height={50}>{value.description !== "" && `(${value.description})`}</Typography>
            <Stack direction="row" alignItems="flex-end" justifyContent="center" height={100} width="100%">
               <Stack justifyContent="center" mb={2}>
                  {value.promo > 0 && (
                     <Typography color="text.secondary">
                        <s>Rp {new Intl.NumberFormat("id-ID").format(value.price)} /bulan</s>
                     </Typography>
                  )}
                  <Typography fontWeight="bold">
                     Rp <span style={{ fontSize: 27 }}>{new Intl.NumberFormat("id-ID").format(value.promo > 0 ? value.promo : value.price)}</span> /bulan
                  </Typography>
               </Stack>
            </Stack>
            <Button
               size="large"
               color="error"
               variant="contained"
               sx={{ mb: 2 }}
               startIcon={<WhatsApp />}
               component={Link}
               href={`https://api.whatsapp.com/send/?phone=${phone}&text=${text}&type=phone_number&app_absent=0`}
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
