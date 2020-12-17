const URL =
	process.env.NODE_ENV === 'production'
        ? 'https://powerful-beyond-48395.herokuapp.com'
        // // Replace top url with deployed app url. No trailing slash?
		: 'http://localhost:8000';

export default URL;
