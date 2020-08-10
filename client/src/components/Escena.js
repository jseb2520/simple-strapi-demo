import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Escena as Scenes} from '@apropiate-cms/api';

const getScenesData = async () => {
	const escenas = await Scenes.getAll();
	return {escenas};
};

const Escena = (props) => {
	const [scenesData, setScenesData] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				let data = await getScenesData();
				console.log('scenes data :>> ', data);
				setScenesData(data);
			} catch (error) {
				console.log('error', error);
			}
		})();
	}, []);

	return <></>;
};
export default Escena;
