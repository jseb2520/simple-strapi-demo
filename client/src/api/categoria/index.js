import {serverRequests} from '../axios-server';

export const Categoria = {
	getAll: () => serverRequests.get(`/categorias`),
	delete: (id) => serverRequests.del(`/categorias/${id}`),
	get: (id) => serverRequests.get(`/categorias/${id}`),
	update: (categoria) => serverRequests.put(`/categorias/${categoria._id}`, categoria),
	create: (categoria) => serverRequests.post('/categorias', categoria),
};
