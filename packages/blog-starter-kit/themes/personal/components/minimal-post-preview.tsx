import Link from 'next/link';
import { User } from '../generated/graphql';
import { DateFormatter } from './date-formatter';

type Author = Pick<User, 'name'>;

type Props = {
	title: string;
	subtitle?: string;
	date: string;
	author: Author;
	slug: string;
	commentCount: number;
};

export const MinimalPostPreview = ({ title, subtitle, date, slug, commentCount }: Props) => {
	const postURL = `/${slug}`;

console.log("Subtitle:", subtitle);

	return (
		<section className="flex flex-col items-start gap-1">
<h2 className="text-base leading-tight tracking-tight text-black dark:text-white mb-2.5">
  <Link href={postURL}>
    {title} 
  </Link>
</h2>
		</section>
	);
};
