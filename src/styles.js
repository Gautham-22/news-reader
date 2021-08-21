import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
    imageContainer: {
        padding: "2% 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "min(70%,380px)",
        height: "200px",
        borderRadius: "10px"
    }
});