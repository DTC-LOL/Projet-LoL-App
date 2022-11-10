import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store';
import Search from './Search';

const mockStore = configureStore();
// const mockDispatchfn = jest.fn(() => new Promise(resolve => resolve('')));
const mockDispatchfn = jest.fn();

describe('<Search / >', () => {
    it('change la classe lorsque\'on le survole', () => {
        const component = renderer.create(
            <Provider store={mockStore()}>
                <Search />
            </Provider>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    
    });
    
});


// describe('<User />', () => {
//   let wrapper: any;

//   const props: any = {
//     handleSubmit: jest.fn(),
//   };

//   it('defines the component', () => {
//     wrapper = mount(
//       <Provider store={mockStore()}>
//         <User {...props} dispatch={mockDispatchfn} />
//       </Provider>,
//     );
//     // console.log('wrapper is', wrapper.debug());
//     expect(wrapper).toBeDefined();
//   });

//   it('renders form component', () => {
//     expect(wrapper.find('[form="user"]').first()).toHaveLength(1);
//   });
// });