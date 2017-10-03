import Navigator from '../../components/navigator';

const initialState = Navigator.router.getStateForAction(
  Navigator.router.getActionForPathAndParams('Home')
);

const reducer = (state = initialState, action) => {
  const nextState = Navigator.router.getStateForAction(action, state);

  return nextState || state;
};

export default reducer;
