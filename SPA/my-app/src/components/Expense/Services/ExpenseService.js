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
    ];

    return expenses;
}

export default getDummies;