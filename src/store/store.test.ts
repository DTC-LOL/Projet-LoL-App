import store from './store';

test('reducers', () => {
    let state;
    state = store.getState();
    expect(state).toEqual(
        {
            filters:
            {
                selectedFilter:'',
                isVisibleBuilding: true,
                selectedSummoner: ''
            },
            gameDatas: { 
                games: null, 
                player: null 
            }
        });
});