import { CircularProgress, Stack } from "@mui/material";

function SpinnerLoader() {
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ height: "100vh" }}>
      <CircularProgress color="warning" size={14} />
    </Stack>
  );
}

export default SpinnerLoader;
