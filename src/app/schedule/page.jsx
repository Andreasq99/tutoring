

export default function Schedule(){
    return(
        <div className="w-full flex flex-col content-center justify-center p-4">
            
            <div className="w-4/5 rounded-lg border-2 text-xl bg-accent-400 text-text m-2">
                <div className="text-2xl w-full bg-gradient-to-b from-header to-accent-400 h-12 pt-1 pl-2 rounded-t-md">
                    Note!
                </div>
                <div className="p-2 pt-0">
                    Schedule changes within 24 hours of a session are subject to additional fees. <br/>
                    Cancelled sessions within 24 hours will be billed at full price, unless rescheduled. <br/>
                    Newly scheduled sessions within 24 hours incur an additional 20% charge.
                </div>
            </div>
        </div>
    );
}