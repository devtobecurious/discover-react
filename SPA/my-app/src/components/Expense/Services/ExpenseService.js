const getDummies = () => {
    const expenses = [
        {
            id: 1,
            title: 'Car',
            amount: 120.41,
            date: new Date()
        },
        {
            id: 2,
            title: 'Food',
            amount: 20,
            date: new Date()
        },

        {
            id: 2,
            title: 'Food',
            amount: 20,
            date: new Date(new Date().getFullYear(), 2, 2)
        },

        {
            id: 2,
            title: 'Food',
            amount: 100,
            date: new Date(new Date().getFullYear(), 3, 3)
        },
    ];

    return expenses;
}

export default getDummies;