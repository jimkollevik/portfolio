import Link from 'next/link';
import { User } from '../generated/graphql';
import { DateFormatter } from './date-formatter';

type Author = Pick<User, 'name'>;

type Props = {
	title: string;
	subtitle: string;
	date: string;
	author: Author;
	slug: string;
	commentCount: number;
};

export const MinimalPostPreview = ({ title, subtitle, date, slug, commentCount }: Props) => {
	const postURL = `/${slug}`;

	return (
		<section className="flex flex-col items-start gap-1">
			<h2 className="text-sm font-light leading-tight tracking-tight text-black dark:text-white">
				<Link href={postURL}>{title}</Link>
			</h2>
			<p>{post.publishedAt}</p>
		</section>
	);
};
