import { Popover } from 'antd'
import React from 'react'
import CustomAvatar from './customAvatar'
import { useGetIdentity } from '@refinedev/core'
import { User } from '@graphql/schema.types/'

export const CurrentUser = () => {
    const { data: user } = useGetIdentity<User>()
    return (
        <>
            <Popover
                placement='bottomRight'
                trigger='click'
                overlayInnerStyle={{ padding: 0 }}
                overlayStyle={{ zIndex: 999 }}
            >
                <CustomAvatar
                    name={user?.name}
                    src={user?.avatarUrl}
                    size="default"
                    style={{ cursor: 'pointer' }}
                />
            </Popover>
        </>
    )
}
