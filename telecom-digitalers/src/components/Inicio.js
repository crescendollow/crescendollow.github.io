import Comments from "../constants/comments";
import CommentsLoader from "./CommentsLoader"
import NewsLoader from "./NewsLoader"
import 'bootstrap/dist/css/bootstrap.min.css';
const Inicio = () => {
    return(
    <>
        <NewsLoader></NewsLoader>
        <CommentsLoader Comments={Comments}></CommentsLoader>
    </>
    );
}

export default Inicio