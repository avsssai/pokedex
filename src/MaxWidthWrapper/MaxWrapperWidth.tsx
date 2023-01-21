export default function MaxWidthWrapper({ children }: { children: string | JSX.Element | JSX.Element[] }) {
	return <div className='relative max-w-wrapperWidth p-4 mx-auto md:p-8'>{children}</div>;
}
