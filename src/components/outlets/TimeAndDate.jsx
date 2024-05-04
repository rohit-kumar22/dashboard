import React, { useState, useEffect } from 'react';

function getOrdinal(n) {
    const suffix = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
}

function TimeAndDate() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const tick = () => setCurrentTime(new Date());
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    const timeString = currentTime.toTimeString().slice(0, 5);
    const dateString = currentTime.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric"
    }).replace(/\d+/, getOrdinal(currentTime.getDate()));

    return (
        <>
            <p className="time">{timeString}</p>
            <p className="date">{dateString}</p>
        </>
    );
}

export default React.memo(TimeAndDate);
