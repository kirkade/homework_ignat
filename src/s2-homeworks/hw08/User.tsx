import React from 'react'
import { UserType } from './HW8'
import s from './HW8.module.css'
import {TableCell, TableRow} from "@mui/material";

// types
type UserPropsType = {
    u: UserType
}

const User: React.FC<UserPropsType> = ({ u }) => {
    return (
        <TableRow id={'hw8-user-' + u._id + '-' + u.age} className={s.item}>
            <TableCell id={'hw8-user-name-' + u._id} className={s.nameCol}>
                {/*отобразить имя*/}
                {u.name}
            </TableCell>
            <TableCell id={'hw8-user-age-' + u._id}>
                {/*отобразить возраст*/}
                {u.age}
            </TableCell>
        </TableRow>
    )
}

export default User
