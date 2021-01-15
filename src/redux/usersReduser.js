const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
   users: [
      { id: 1, followed: false, nickName: 'Dmitry', status: 'I am a boss', location: { city: 'Mensk', country: 'Belarus' } },
      { id: 2, followed: true, nickName: 'Rasputin', status: 'I am a boss too', location: { city: 'Moscow', country: 'Ruzzia' } },
      { id: 3, followed: false, nickName: 'Pavlo', status: 'I am a boss too', location: { city: 'Kyiv', country: 'Ukraine' } }
   ]
}


const usersReducer = (state = initialState, action) => {

   switch (action.type) {
      case FOLLOW:
         let stateCopy = {
            ...state,
            users: [...state.users],
            users: state.users.map(u => u)
         }
      case UNFOLLOW:

      default:
         return state;
   }
}

export const followActionCreator = () => ({ type: FOLLOW })
export const unfollowActionCreator = () => ({ type: UNFOLLOW })

export default usersReducer;