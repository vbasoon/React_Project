const usersReducer = (state = initialState, action) => {

   switch (action.type) {
      default:
         return state;
   }
}

export const followActionCreator = () => ({ type: FOLLOW })
export const unfollowActionCreator = () => ({ type: UNFOLLOW })

export default usersReducer;