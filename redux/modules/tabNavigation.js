import HomeTabNavigator from '../../components/HomeTabNavigator';

const initialState = HomeTabNavigator.router.getStateForAction(
  HomeTabNavigator.router.getActionForPathAndParams('Utrke')
);

const reducer = (state = initialState, action) => {
  const nextState = HomeTabNavigator.router.getStateForAction(action, state);

  return nextState || state;
};

export default reducer;
