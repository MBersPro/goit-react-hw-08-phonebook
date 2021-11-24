export const initialStateSelector = (state) => state.contacts.contactsList
export const loadingSelector = (state) => state.loader
export const errorSelector = (state) => state.error

export const getSomeContactsSelector = (state) => {
    if (state.contacts.filterName)
        return [...state.contacts.contactsList.filter(({ name }) =>
            name.toLowerCase().includes(state.contacts.filterName)
        )]
      
    return state.contacts.contactsList
};