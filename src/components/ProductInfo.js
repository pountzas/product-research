// import { Box, Typography, CheckCircle } from "@mui/material";

import { Box, Typography } from "@mui/material";

const ProductInfo = ({ data }) => {
  return (
    <Box mt={2}>
      <img src={data.image} alt={data.name} />
      <Typography variant="h6" gutterBottom>
        {data.name}
      </Typography>
      {/* <CheckCircle color="primary" /> */}
    </Box>
  );
};

export default ProductInfo;
