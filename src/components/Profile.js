import { useState } from 'react'

const Profile = (props) => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    return (
        <>
            <h2>Hello {props.name + " " + props.lastName}</h2>
            <h2>This is functional component</h2>
            <h2>Count1 : {count1}</h2>
            <h2>Count2 : {count2}</h2>
            <button onClick={() => {
                setCount1(count1 + 1)
            }}>Increase count by 1</button>
            <button onClick={() => {
                setCount2(count2 + 2)
            }}>Increase count by 2</button>
        </>
    )
}

export default Profile