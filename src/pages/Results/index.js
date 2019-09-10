import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Typography, Button } from '@material-ui/core';
import queryString from 'query-string';

import { searchMovie } from '../../redux/actions/search';

export default ({ location, history }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const { movieName } = queryString.parse(location.search);
		dispatch(searchMovie({ movieName }));
	});

	const handleReturnHomeClick = event => {
		history.push('/');
	};

	return (
		<Container>
			<Typography variant='h1'>Results</Typography>
			<Button variant='contained' color='primary' size='large' onClick={handleReturnHomeClick}>
				Regresar a Home
			</Button>
		</Container>
	);
};
