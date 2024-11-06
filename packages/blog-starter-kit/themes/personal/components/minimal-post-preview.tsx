import Link from 'next/link';
import { User } from '../generated/graphql';
import { DateFormatter } from './date-formatter';

type Author = Pick<User, 'name'>;

type Props = {
	title: string;
	date: string;
	author: Author;
	slug: string;
	commentCount: number;
};

export const MinimalPostPreview = ({ title, date, slug, commentCount }: Props) => {
	const postURL = `/${slug}`;

	return (

			<p className="text-sm">
				<Link href={postURL}>{title}</Link>
			</p>

	);
};
