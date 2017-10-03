import TabNavigator from '../../components/TabNavigator';

const initialState = TabNavigator.router.getStateForAction(
  TabNavigator.router.getActionForPathAndParams('Utrke')
);

const reducer = (state = initialState, action) => {
  const nextState = TabNavigator.router.getStateForAction(action, state);

  return nextState || state;
};

export default reducer;
