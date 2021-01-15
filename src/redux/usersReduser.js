const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS"

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
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u;
            })
         }

      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u;
            })
         }

      case SET_USERS: {
         return { ...state, users: [...state.users, action.users] }
      }

      default:
         return state;
   }
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId })
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users })

export default usersReducer;