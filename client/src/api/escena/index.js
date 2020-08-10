import {serverRequests} from '../axios-server';

export const Escena = {
	getAll: () => serverRequests.get(`/escenas`),
	delete: (id) => serverRequests.del(`/escenas/${id}`),
	get: (id) => serverRequests.get(`/escenas/${id}`),
	update: (escena) =>
		serverRequests.put(`/escenas/${escena._id}`, escena),
	create: (escena) =>
		serverRequests.post('/escenas', escena),
};
