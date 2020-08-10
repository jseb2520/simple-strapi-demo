import {serverRequests} from '../axios-server';

export const Asset = {
	getAll: () => serverRequests.get(`/assets`),
	delete: (id) => serverRequests.del(`/assets/${id}`),
	get: (id) => serverRequests.get(`/assets/${id}`),
	update: (asset) => serverRequests.put(`/assets/${asset._id}`, asset),
	create: (asset) => serverRequests.post('/assets', asset),
};
