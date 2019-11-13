import { generateUrl } from './url-gen';

describe('', () => {
  it('should create url', async () => {
    const url = await generateUrl();
    expect.stringContaining(url);
  });
});
