export interface IFooter extends React.ComponentPropsWithoutRef<`footer`> {}

const Footer: React.FC<IFooter> = ({ ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`w-full p-5 text-skin-base bg-skin-fill`}
    >
      <p className="text-center">Footer</p>
    </footer>
  )
}

export default Footer
