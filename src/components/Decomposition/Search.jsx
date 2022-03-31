import * as React from 'react'

/**
 * Represents Search form with example
 * @param {string} searchExample - example string for search.
 */
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
