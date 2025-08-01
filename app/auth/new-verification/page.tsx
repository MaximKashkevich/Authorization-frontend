import type { Metadata } from 'next'

import { NewVerificationForm } from '@/app/features/auth/components/new-verification-form'

export const metadata: Metadata = {
	title: 'Подтверждение почты'
}

export default function NewVerificationPage() {
	return <NewVerificationForm />
}
