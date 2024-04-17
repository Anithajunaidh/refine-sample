import React from 'react'
import { Avatar as AntdAvatar, AvatarProps } from 'antd'

type Props = AvatarProps & {
    name?: string,
}

const CustomAvatar = ({ name, style, ...rest }: Props) => {
    return (
        <AntdAvatar
            alt={name}
            size="small"
            style={{
                backgroundColor: "#879707",
                display: 'flex',
                alignItems: 'center',
                border: 'none'
            }}
            {...rest}
        >
            {name}
        </AntdAvatar>
    )
}

export default CustomAvatar