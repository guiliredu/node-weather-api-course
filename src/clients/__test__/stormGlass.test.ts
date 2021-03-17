import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormGlassResponse from '@test/fixtures/stormglass_response.json';
import stormGlassResponseNormalized from '@test/fixtures/stormglass_response_normalized.json';

jest.mock('axios');

describe('StormGlass client', () => {
  it('should return a normalized forecast from the StormGlass service', async () => {
    const lat = -33.123123;
    const lng = -53.321321;

    axios.get = jest.fn().mockResolvedValue({data: stormGlassResponse});

    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);

    expect(response).toEqual(stormGlassResponseNormalized);
  });
});
