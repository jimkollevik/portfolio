import { addPublicationJsonLd } from '@starter-kit/utils/seo/addPublicationJsonLd';
import { getAutogeneratedPublicationOG } from '@starter-kit/utils/social/og';
import request from 'graphql-request';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { Container } from '../components/container';
import { AppProvider } from '../components/contexts/appContext';
import { Footer } from '../components/footer';
import { Layout } from '../components/layout';
import { MinimalPosts } from '../components/minimal-posts';
import { PersonalHeader } from '../components/personal-theme-header';
import {
	MorePostsByPublicationDocument,
	MorePostsByPublicationQuery,
	MorePostsByPublicationQueryVariables,
	PageInfoFragment,
	PostFragment,
	PostsByPublicationDocument,
	PostsByPublicationQuery,
	PostsByPublicationQueryVariables,
	PublicationFragment,
} from '../generated/graphql';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

type Props = {
	publication: PublicationFragment;
	initialPosts: PostFragment[];
	initialPageInfo: PageInfoFragment;
};

export default function Index({ publication, initialPosts, initialPageInfo }: Props) {
	const [posts, setPosts] = useState<PostFragment[]>(initialPosts);
	const [pageInfo, setPageInfo] = useState<Props['initialPageInfo']>(initialPageInfo);
	const [loadedMore, setLoadedMore] = useState(false);

	const loadMore = async () => {
		const data = await request<MorePostsByPublicationQuery, MorePostsByPublicationQueryVariables>(
			GQL_ENDPOINT,
			MorePostsByPublicationDocument,
			{
				first: 20,
				host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
				after: pageInfo.endCursor,
			},
		);
		if (!data.publication) {
			return;
		}
		const newPosts = data.publication.posts.edges.map((edge) => edge.node);
		setPosts([...posts, ...newPosts]);
		setPageInfo(data.publication.posts.pageInfo);
		setLoadedMore(true);
	};
	return (
		<AppProvider publication={publication}>
			<Layout>
				<Head>
					<title>{publication.title}</title>
					<meta
						name="description"
						content={
							publication.descriptionSEO || publication.title || `${publication.author.name}'s Blog`
						}
					/>
					<meta property="twitter:card" content="summary_large_image"/>
					<meta property="twitter:title" content={publication.displayTitle || publication.title || 'Hashnode Blog Starter Kit'} />
					<meta property="twitter:description" content={publication.descriptionSEO || publication.title || `${publication.author.name}'s Blog`} />
					<meta
						property="og:image"
						content={publication.ogMetaData.image || getAutogeneratedPublicationOG(publication)}
					/>
					<meta
						property="twitter:image"
						content={publication.ogMetaData.image || getAutogeneratedPublicationOG(publication)}
					/>
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify(addPublicationJsonLd(publication)),
						}}
					/>
				</Head>
				<Container className="mx-auto flex max-w-2xl flex-col items-stretch gap-10 px-5 py-10 pt-10 text-sm">
					<PersonalHeader />
					<div className="max-w-sm mb-12 font-interLight pl-2">
					<p>I&apos;m a Martech Professional taking care of marketing technologies so others can produce exceptional experiences.
						<br/><br/>
					I&apos;m fond of data, simplicity and productivity, trying to make things simple and to get 1% better for each day.
						<br/><br/>
					When I&apos;m not
					doing that I&apos;m either in the slopes or in the kitchen cooking italian food.
						<br/><br/>
					Sometimes I finish a book but more often I&apos;m building web things.
						<br/><br/>
					Get in touch: <a href="" className="underline text-accent-1 text-sm dark:border-neutral-800 dark:text-neutral-400">jim.kollevik@gmail.com</a></p>
					</div>

					<div className="mb-12">
					<h2 className="pl-2">Work</h2>
					<br/>
					{posts.length > 0 && <MinimalPosts context="home" posts={posts} />}
					{!loadedMore && pageInfo.hasNextPage && pageInfo.endCursor && (
						<button onClick={loadMore}>
							Load more
						</button>
					)}
					{loadedMore && pageInfo.hasNextPage && pageInfo.endCursor && (
						<Waypoint onEnter={loadMore} bottomOffset={'10%'} />
					)}
					</div>

					<div className="mb-12 pl-2">
					<h2>For fun</h2>
					<br/>
					<section className="hover:bg-[#FBFBFB] pt-3 rounded-md cursor-pointer flex flex-col items-start gap-1 dark:hover:bg-[#141A26]">
						<a href="https://www.notion.so/templates/yearly-goal" title="notion goal template" target="_blank"><h2 className="text-sm font-interLight leading-tight tracking-tight text-black dark:text-white">
							Notion goal template
						</h2></a>
						<p className="font-light mb-4 text-sm text-accent-1 font-interLight">Free Notion template to get your goals right.</p>
					</section>
					</div>

					<div className="mb-12 pl-2">
					<h2>Testimonial</h2>
					<br/>
						<p className="max-w-sm font-interLight">
							It was a genuine pleasure working alongside Jim at Hertz. He consistently demonstrated a remarkable blend of analytical prowess and social skills, fostering a positive atmosphere among the team.
							<br/><br/>
							He&apos;s passion for his work not only elevated our projects but also inspired those around him to strive for excellence.
							<br/><br/>
							His contributions were invaluable, and I am confident Jim will excel in any endeavor he pursues next.
							<br/><br/>
							<span className="text-accent-1">Anders Tärnell, CMO Hertz</span>
						</p>
					</div>	

					<div className="mb-12 pl-2">
					<h2>Toolbox</h2>
					<br/>
						<ul className="font-interLight">
							<li>Salesforce CRM</li>
							<li>Salesforce Marketing Cloud</li>
							<li>Google Analytics</li>
							<li>Agile Development</li>
							<li>Azure DevOps</li>
							<li>HTML/CSS</li>
							<li>ChatGPT</li>
							<li>Adobe/Office packages</li>
						</ul>
					</div>		

					<div className="mb-12 pl-2">
					<h2>Certifications</h2>
					<br/>
						<ul className="font-interLight">
							<li><span className="text-accent-1 dark:border-neutral-800 dark:text-neutral-400">2024 •</span> Scrum Product Owner</li>
							<li><span className="text-accent-1 dark:border-neutral-800 dark:text-neutral-400">2024 •</span> Salesforce Business Analyst</li>
							<li><span className="text-accent-1 dark:border-neutral-800 dark:text-neutral-400">2023 •</span> Hubspot Email Marketing</li>
							<li><span className="text-accent-1 dark:border-neutral-800 dark:text-neutral-400">2023 •</span> TUFF Leadership training</li>
							<li><span className="text-accent-1 dark:border-neutral-800 dark:text-neutral-400">2021 • </span> Google Analytics Qualification</li>
						</ul>
					</div>											
					<Footer />
				</Container>
			</Layout>
		</AppProvider>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const data = await request<PostsByPublicationQuery, PostsByPublicationQueryVariables>(
		GQL_ENDPOINT,
		PostsByPublicationDocument,
		{
			first: 20,
			host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
		},
	);

	const publication = data.publication;
	if (!publication) {
		return {
			notFound: true,
		};
	}
	const initialPosts = (publication.posts.edges ?? []).map((edge) => edge.node);

	return {
		props: {
			publication,
			initialPosts,
			initialPageInfo: publication.posts.pageInfo,
		},
		revalidate: 1,
	};
};