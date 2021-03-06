import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
    media: {
        height: 250,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white',
    },
    activeCard: {
        borderBottom: '10px solid #22289a',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    title: {
        fontWeight: "bolder",
        padding: '0 16px',
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    }
});