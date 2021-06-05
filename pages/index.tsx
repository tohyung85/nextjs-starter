import Link from "next/link";
import { Container, Typography, Box, Button } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import styles from "./styles/index.module.scss";

export default function Home() {
  const router = useRouter();

  const aboutButtonClicked = () => {
    router.push("/about");
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          NextJs Example
        </Typography>
        <Typography variant="subtitle1">
          Click on
          <Button
            variant="contained"
            color="primary"
            onClick={aboutButtonClicked}
            className={styles.btn}
          >
            This Button
          </Button>
          or <Link href="/about">This Link</Link> to go to the about page
        </Typography>
      </Box>
    </Container>
  );
}
