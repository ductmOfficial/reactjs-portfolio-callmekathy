import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const logoText = { fontSize: "38px", fontWeight: "bold", textDecoration: "none" } as const;

export function Logo() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", color: "primary.main" }}>
      <Typography
        noWrap
        sx={{ ...logoText, color: "text.primary", display: { xs: "none", sm: "inline-block" } }}
      >
        callme
        <Typography
          component="span"
          sx={{ fontSize: "inherit", fontWeight: "inherit", color: "primary.main" }}
        >
          kathy
        </Typography>
        .
      </Typography>
      <Typography
        noWrap
        sx={{ ...logoText, color: "inherit", display: { xs: "inline-block", sm: "none" } }}
      >
        kathy
      </Typography>
    </Box>
  );
}
