import React, { useState } from 'react';
import './Check.scss'

export default function Check(props) {
    const [checkin, setCheckin] = useState(false)
    function toggleCheckin() {
        setCheckin(!checkin)
        props.handleCheckin(checkin)
    }
    return (
        <div className="Check" onClick={() => toggleCheckin()}>
            {
                checkin ?
                    'Check Out'
                    :
                    'Check In'
            }
        </div>
    )
}