export const getPercentage = (data: any) => {
	return data.reduce((accumulator, current) => accumulator + (current || 0), 0);
};
