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
            timeline: { 
                selectedTime: 1, 
                mediaPlayerTime: 0, 
                mediaPlayerState: 'stopped' 
            }, 
            gameDatas: { 
                games: null, 
                player: null 
            }
        });
});