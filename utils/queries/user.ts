{
  /*
   * Name is using fetch+type+query format
   */
}
export const fetchAllUserQuery = () => {
  const query = `*[_type == "user"] {
			_id,
			name,
		}`;
  return query;
};
