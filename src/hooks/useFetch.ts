import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useFetching = (someFetchActionCreator: Function) => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(someFetchActionCreator())
	}, [someFetchActionCreator, dispatch])
}
