describe('Beach forecast functional tests', () => {
    it('should return a forecast with jus a few times', async () => {
        const { body, status } = await global.testRequest.get('/forecast');

        expect(status).toBe(200);
        expect(body).toEqual(['ok']);
    });
});