import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEOPOSITION_API_URL, geoApiOptions } from '../../../api/api';
import cl from './Search.module.css';

export default function Search({ onSearchChange }) {

	const [search, setSearch] = useState('Vijayawada');

	const customStyles = {
		control: (provided, state) => ({
			...provided,
			backgroundColor: 'rgba(71, 147, 255, 0.2)',
			borderRadius: '10px',
			fontWeight: 'Medium',
			border: 'none',
			color: '#000'
		}),
		menu: (provided, state) => ({
			...provided,
			backgroundColor: 'rgba(71, 147, 255, 0.2)',
			border: 'none',
		}),
		option: (provided, state) => ({
			...provided,
			backgroundColor: state.isFocused ? '#3699FF' : null,
			color: state.isFocused ? 'white' : null,
		}),
	};

	const loadOptions = (inputValue) => {
		return fetch(`${GEOPOSITION_API_URL}/cities?namePrefix=${inputValue}`, geoApiOptions)
			.then(response => response.json())
			.then(response => {
				return {
					options: response.data.map((city) => {
						return {
							value: `${city.latitude} ${city.longitude}`,
							label: `${city.name}, ${city.countryCode}`,
						}
					})
				}
			})
			.catch(err => console.log(err));
	}

	const handleOnSearch = (searchData) => {
		setSearch(searchData);
		onSearchChange(searchData);
	}

	return (
		<AsyncPaginate
			className={cl.inputSearch}
			styles={customStyles}
			placeholder='Search for city'
			debounceTimeout={600}
			value={search}
			onChange={handleOnSearch}
			loadOptions={loadOptions}
		/>
	)
}
