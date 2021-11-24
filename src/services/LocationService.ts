export class LocationService {
    public async FindLocation(input: string) {        
        const urlString = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';        
        const response = await fetch(urlString + new URLSearchParams({
            input: input,
            language: 'sv',
            types: 'address',
            key: 'AIzaSyB7UPeXuhwthfwjGlMcNMBEeXelCNcXjvg',
        }));

        const locationInformation = await response.json();
    }
}