import React from 'react';
const User = (props) => {
    return (
        <div>
            <ul>
            {
                props.userList.map(item => {
                    return <li>{item.name} <strong>{item.age}</strong></li>
                })
            }
            </ul>
        </div>
    );
};
export default User;