function makeColourRegion(region) {
    const colors= {
        Africa: 'blue',
        Americas: 'green',
        Asia: 'red',
        Europe: 'yellow',
        Oceania: 'purple'
    };
    return colors[region]|| 'grey';
}

export default makeColourRegion