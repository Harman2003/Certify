const EventHeld = ({index,name,certification}) => {
    return (
        <div className="flex items-center h-12 text-black font-lg">
            <div className="w-[100px] text-[18px] text-center font-bold border-r-2">{index}</div>
            <div className="w-full text-center text-[18px] font-bold border-r-2">{name}</div>
            <div className="w-[220px] text-center text-[18px] font-bold border-r-2">{certification}</div>
        </div>
    );
}

export default EventHeld;