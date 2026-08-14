export type AddLayoutProps = React.PropsWithChildren;

export const AddLayout = ({children}: AddLayoutProps) => {
    return (
        <>
            <div className="add form">
                {children}
            </div>
        </>
    )
}