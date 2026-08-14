export type AddLayoutProps = React.PropsWithChildren;

export const AddLayout = ({ children }: AddLayoutProps) => {
  return (
    <div className="form-card">
      {children}
    </div>
  );
};