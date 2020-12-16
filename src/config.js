const URL =
	process.env.NODE_ENV === 'production'
        ? 'http://localhost:8000'
        // // Replace top url with deployed app url. No trailing slash?
		: 'http://localhost:8000';

export default URL;
