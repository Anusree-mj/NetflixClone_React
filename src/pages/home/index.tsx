import Navbar from "../../components/navbar";
import Main from "../../components/main";
import Row from "../../components/row";
import requests from "../../requests";
import { RowType } from "../../components/type";

const Home = () => {
    const rows: RowType = [
        { rowId: 1, title: 'Upcoming', fetchURL: requests.requestUpcoming },
        { rowId: 2, title: 'Top Rated', fetchURL: requests.requestMostViewed },
        { rowId: 3, title: 'Action', fetchURL: requests.requestAction },
        { rowId: 4, title: 'Horror', fetchURL: requests.requestHorror },
        { rowId: 5, title: 'Comedy', fetchURL: requests.requestComedy },
    ];

    return (
        <>
            <Navbar />
            <Main />
            {rows.map((row, index) => (
                <Row key={row.rowId} title={row.title} fetchURL={row.fetchURL} rowId={row.rowId} />
            ))}
        </>
    );
};

export default Home;
