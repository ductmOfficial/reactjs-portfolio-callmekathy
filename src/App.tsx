import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { Header } from "./components/Header";
import { credit } from "./content/profile";
import { AboutMe } from "./sections/AboutMe";
import { Education } from "./sections/Education";
import { GetInTouch } from "./sections/GetInTouch";
import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";

export function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
          minHeight: "calc(100vh - 85px)",
          bgcolor: "background.default",
          mt: "65px",
        }}
      >
        <Box component="article">
          <Hero />
          <AboutMe />
          <Skills />
          <Education />
          <GetInTouch />
        </Box>

        <Box component="footer" sx={{ py: 2, textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Designed & Built by{" "}
            <Link href={credit.url} target="_blank" underline="always">
              {credit.name}
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
