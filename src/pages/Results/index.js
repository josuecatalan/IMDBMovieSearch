import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Typography } from '@material-ui/core';
import queryString from 'query-string';

import { searchMovie } from '../../redux/actions/Search';

export default ({ location }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const { movieName } = queryString.parse(location.search);
		dispatch(searchMovie({ movieName }));
	});

	return (
		<Container>
			<Typography>Results</Typography>
		</Container>
	);
};
