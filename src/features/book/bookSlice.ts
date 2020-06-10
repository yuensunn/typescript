// import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
// import { RootState } from 'app/rootReducer'

// type Book = { bookId: string; title: string }

// const booksAdapter = createEntityAdapter<Book>({
//   // Assume IDs are stored in a field other than `book.id`
//   selectId: (book) => book.bookId,
//   // Keep the "all IDs" array sorted based on book titles
//   sortComparer: (a, b) => a.title.localeCompare(b.title),
// })

// const booksSlice = createSlice({
//   name: 'books',
//   initialState: booksAdapter.getInitialState(),
//   reducers: {
//     // Can pass adapter functions directly as case reducers.  Because we're passing this
//     // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
//     bookAdded: booksAdapter.addOne,
//     booksReceived(state, action) {
//       // Or, call them as "mutating" helpers in a case reducer
//       booksAdapter.setAll(state, action.payload.books)
//     },
//   },
// })

// export const booksSelectors = booksAdapter.getSelectors<RootState>(
//   (state) => state.books,
// )
