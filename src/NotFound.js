import { Link } from "react-router-dom";
import TabsKey from "./TabsKey";

const NotFound = () => {
    return (  
        <div className="not-found">
            <TabsKey/>
            <h2>Sorry</h2>
            <h3>The page cannot be found </h3>
            <Link to="/">Back to Home...</Link>
        </div>
    );
}
 
export default NotFound;