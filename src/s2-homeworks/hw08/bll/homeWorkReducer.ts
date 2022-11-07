import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                return [...state].sort((user1, user2) => user1.name.localeCompare(user2.name))
            } else if (action.payload === 'down') {
                return [...state].sort((user1, user2) => user2.name.localeCompare(user1.name))
            }
            return state
        }
        case 'check': {
            return [...state].filter((u) => u.age >= 18)
        }
        default:
            return state
    }
}
