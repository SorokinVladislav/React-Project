import React, {useState} from 'react'
import {useEffect} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState( false);
    let [status, setStatus] = useState( props.status);

    useEffect(() =>{
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = ()  =>{
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e)  =>{
            setStatus(e.currentTarget.value);
    };

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "Vze " }</span>
            </div>
            }
            {editMode &&
                <div>
                    <input  onChange={onStatusChange}
                            autoFocus={true}
                            value={status}
                            onBlur={deactivateEditMode}/>
                </div>
            }
        </div>
    )
}
export default ProfileStatusWithHooks;