import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className="pt-10 text-sm dark:border-neutral-800 dark:text-neutral-400 pl-2">
			<div className="mb-6">
				<h2 className="text-black dark:text-white">Thanks & contact</h2>
			</div>	
			<p className="text-accent-1 font-interLight">You can reach me at <a href="" className="underline">jim.kollevik@gmail.com</a> or read <a href="https://drive.google.com/file/d/19DE86kyCwU6NNfEIdNvb3GaX7gBOqvhb/view" className="underline" target="_blank">my cv here</a>.
			Special thanks to <a href="https://rsms.me" className="underline" target="_blank">https://rsms.me</a> for the use of Inter face!</p>
		</footer>
	);
};
