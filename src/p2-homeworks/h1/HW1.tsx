import React from 'react'
import {Message} from "./Message";

const messageData = {
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amateur-made_Na%27vi.jpg',
    name: 'Roman',
    message: 'Hello Roman',
    time: '22:09',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
