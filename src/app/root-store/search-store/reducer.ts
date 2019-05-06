import { Actions, ActionTypes } from './actions';
import { featureAdapter, initialState, State } from './state';

export function featureReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.BING_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case ActionTypes.BING_SUCCESS: {
      return featureAdapter.addAll(action.payload.items, {
        ...state,
        isLoading: false,
        error: null,
      });
    }
    case ActionTypes.BING_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }

    case ActionTypes.GOOGLE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case ActionTypes.GOOGLE_SUCCESS: {
      return featureAdapter.addAll(action.payload.items, {
        ...state,
        isLoading: false,
        error: null,
      });
    }
    case ActionTypes.GOOGLE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }

    case ActionTypes.SELECT_PROVIDER: {
      return {
        ...state,
        isLoading: true,
        error: null,
        provider: action.payload.provider,
      };
    }

    case ActionTypes.SELECT_PROVIDER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    }

    default: {
      return state;
    }
  }
}
