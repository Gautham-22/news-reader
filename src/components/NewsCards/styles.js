import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
    container: {
        width: "min(100%,1490px)",
        padding: "0 3%",
        margin: "0 auto"
    },
    card: {
        display: "flex",
        textAlign: "center"
    },
    title: {
        fontFamily: "'Lobster', cursive",
        marginBottom: "5px"
    },
    infoCard: {
        width: "100%",
        padding: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        borderRadius: 10
    },
    info: {
        margin: "10px 0px"
    },
    text: {
        marginTop: "5px"
    }
});