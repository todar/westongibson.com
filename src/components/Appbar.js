import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Link from "@material-ui/core/Link";
import PhoneIcon from "@material-ui/icons/Phone";
import Box from "@material-ui/core/Box";

const phoneNumber = "602 399 4200";

const Appbar = () => {
  return (
    <AppBar position="fixed">
      <ToolBar style={{ display: "flex", justifyContent: "space-around" }}>
        <img
          style={{ width: "300px" }}
          src="./assets/logo.png"
          alt="Weston Gibson"
        ></img>

        <Link color="secondary" href={`tel:${phoneNumber}`}>
          <Box display="flex" alignItems="center" flexWrap="no-wrap">
            <PhoneIcon /> <Box marginLeft={1}> {phoneNumber}</Box>
          </Box>
        </Link>
      </ToolBar>
    </AppBar>
  );
};

export default Appbar;
