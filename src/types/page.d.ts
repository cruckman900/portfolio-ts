import { NextPage } from 'next'
import { ComponentType, ReactElement, ReactNode } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type Page<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
    layout?: ComponentType;
}
