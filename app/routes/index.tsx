import { Link } from '@remix-run/react';

/**
 * TODO
 * 
 * create:
 * About page
 * Portfolio/past work page
 * Experience page
 */
const Index = () => (
	<div className="flex justify-start items-center pt-20 h-screen w-screen flex-col text-center">
		<h1 className="pb-10">Ryan Snyder</h1>
		<h2>A Frontend Developer with experience in building user driven experiences</h2>
		<h2 className="py-10">
			In the{' '}
			<Link className="underline" to="/books">
				books
			</Link>{' '}
			route you will find an example of a loader. This stack works great with both your own api's or a separate 3rd api.
		</h2>
		<h2 data-cy="test">
			The prettier config is opinionated and the structure of the project as well, feel free to change those.
		</h2>
	</div>
);

export default Index;
