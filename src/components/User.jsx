import React from 'react'
import { Button } from './Button'

const User = ({ data }) => {
    return (
        <>
        {data.map((name, id) => (
            <li key={id}>
                {name} <Button text={"x"}/>
            </li>
        ))}
        </>
    )
}

export default User