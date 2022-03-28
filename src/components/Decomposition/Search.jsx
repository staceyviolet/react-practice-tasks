import * as React from 'react'

export const Search = ({searchExample}) => {
  return (
    <>
        <form>
        <input/>
            <button>Найти</button>
        </form>
        <span>Найдется все. Например {searchExample}</span>
    </>
  )
}
