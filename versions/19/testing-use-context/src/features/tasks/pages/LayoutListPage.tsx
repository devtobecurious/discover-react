import { PropsWithChildren } from "react"

export type LayoutListPageProps = PropsWithChildren

export const LayoutListPage = ({children}: LayoutListPageProps) => {
    return <div className="layout">{children}</div>
}