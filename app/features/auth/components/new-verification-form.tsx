'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { Loading } from '@/app/shared/components/ui/Loading'

import { useVerificationMutation } from '../hooks/use-verification-mutation'

import { AuthWrapper } from './auth-wrapper'

export function NewVerificationForm() {
	const searchParams = useSearchParams()
	const token = searchParams.get('token')

	const { verification } = useVerificationMutation()

	useEffect(() => {
		verification(token)
	}, [token])

	return (
		<AuthWrapper heading='Подтверждение почты'>
			<div>
				<Loading />
			</div>
		</AuthWrapper>
	)
}
