import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
    container: {
        width: "100%",
        padding: "0 3%"
    },
    card: {
        display: "flex",
        textAlign: "center"
    },
    title: {
        fontFamily: "'Lobster', cursive"
    },
    infoCard: {
        width: "100%",
        minHeight: "50vh",
        padding: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        borderRadius: 10
    }
});