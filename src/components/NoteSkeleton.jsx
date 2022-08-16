import React from "react";
import Loader from "./Loader";

function NoteSkeleton(){
    return <div className="note skeleton">
        <Loader />
    </div>
}

export default NoteSkeleton