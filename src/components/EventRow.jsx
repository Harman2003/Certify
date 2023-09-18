import { Link } from "react-router-dom";

const EventRow = ({index,name,certification,EventId}) => {
    console.log(EventId);
    return (
        <Link to={`/${EventId}`} className="flex items-center h-12 text-black font-lg">
            <div className="w-[100px] text-[18px] text-center border-r-2">{index}</div>
            <div className="w-full text-center text-[18px] border-r-2">{name}</div>
            <div className="w-[220px] text-center text-[18px] border-r-2">{certification}</div>
        </Link>
    );
}

export default EventRow;