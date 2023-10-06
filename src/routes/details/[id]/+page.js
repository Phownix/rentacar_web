import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (params.id) {
        return {data : params.id}
	}

	throw error(418, 'The vehicle was not found');
}