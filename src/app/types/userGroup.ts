export interface UserGroupModel {
    firstName: string;
	email: string;
	lastName: string;
	mobile: string;
    countryId: number;
	stateId: number;
	cityId: number;
	country: Country;
	state: State;
	city: City;

}
export interface Country {
    id: number;
    name: string;
}
export interface State {
    id: number;
    name: string;
}
export interface City {
    id: number;
    name: string;
}


