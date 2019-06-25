import { useState, useMemo, useEffect } from 'react'
import { generateElement } from './utils'

const useRunner = ({ code, scope, type }) => {
  if (!useState) throw new Error('Require React 16.8 or above to use hooks')

  // memoize scope to avoid effect loop
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoScope = useMemo(() => scope, [scope && Object.keys(scope).join()])
  const [state, setState] = useState({ element: null, error: null })
  useEffect(() => {
    try {
      const element = generateElement(
        { code, scope: memoScope, type },
        error => {
          setState({ error, element: null })
        }
      )
      setState({ element, error: null })
    } catch (error) {
      setState({ error, element: null })
    }
  }, [code, memoScope, type])

  return state
}

export default useRunner
