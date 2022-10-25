export const stripe = {
    charges: {
        create: jest.fn()
            .mockImplementation(
                (currency: string, amount: number, source: string) => {
                    return new Promise((resolve, reject) => {
                        resolve({ id: 'stripe_id_mock_value' })
                    });
                }
            )
    }
}