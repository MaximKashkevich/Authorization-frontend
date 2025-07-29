import { FC } from 'react'
import { FaGoogle, FaYandex } from 'react-icons/fa'

import { Button } from '@/app/shared/components/ui'

interface AuthSocialProps {
	className?: string
}

export const AuthSocial: FC<AuthSocialProps> = () => {
	return (
		<>
			<div className='grid grid-cols-2 gap-6'>
				<Button variant='outline'>
					<FaGoogle className='size-4' />
					Google
				</Button>
				<Button variant='outline'>
					<FaYandex className='size-4' />
					Яндекс
				</Button>
			</div>
			<div className='relative'>
				<div className='absolute inset-0 flex items-center'>
					<span className='border-border w-full border-t' />
				</div>
				<div className='relative flex justify-center'>
					<span className='bg-background text-muted-foreground px-2 text-sm'>
						ИЛИ
					</span>
				</div>
			</div>
		</>
	)
}
