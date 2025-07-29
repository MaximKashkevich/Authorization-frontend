import { RegisterForm } from '@/app/features/auth/components/register-form'

interface PageProps {
	className?: string
}

export default function RegisterPage() {
	return (
		<div>
			<RegisterForm />
		</div>
	)
}
