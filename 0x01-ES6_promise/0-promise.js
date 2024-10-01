function getFullResponseFromAPI(apiEndpoint) {
  return new Promise((resolve, reject) => {
    if (apiEndpoint) resolve({ status: 200, body: 'Success' });
    reject(Error('Failed to fetch API'));
  });
}
// Exports of the function for externe using
export default getFullResponseFromAPI;
