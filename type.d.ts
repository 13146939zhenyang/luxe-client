export interface User {
	_id: string;
	name: string;
	email: string;
	requriements: clientRequirement[];
	createdAt: Date;
}
export interface clientRequirement {
	_id: string;
	userId: string;
	brand: string;
	category: string;
	itemname: string;
	message: string;
	createdAt: Date;
}