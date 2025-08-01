'use client'

import { FC } from 'react'

import { Toaster } from '../components/ui'

interface ToastProviderProps {
	className?: string
}

export const ToastProvider: FC<ToastProviderProps> = () => {
	return <Toaster position='bottom-right' duration={5000}></Toaster>
}
