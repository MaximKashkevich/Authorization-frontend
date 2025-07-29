import { LoginForm } from '@/app/features/auth/components/login-form'

interface PageProps {
	className?: string
}

export default function LofinPage() {
	return (
		<div>
			<LoginForm />
		</div>
	)
}
