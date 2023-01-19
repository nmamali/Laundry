import React, { createContext } from 'react'

const FirebaseContext = createContext({})
export const FirebaseProvider = FirebaseContext.Provider

export const FirebaseConsumer = FirebaseContext.Consumer