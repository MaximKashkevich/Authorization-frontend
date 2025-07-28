import Link from 'next/link'

import { buttonVariants } from '@/app/shared/components/ui'

export default function Home() {
	return (
		<div className='space-y-5 text-center'>
			<h1 className='text-4xl font-bold'>Home Page</h1>
			<Link href='/auth/login' className={buttonVariants()}>
				Войти в аккаунт
			</Link>
		</div>
	)
}
