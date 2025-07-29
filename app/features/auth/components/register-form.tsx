'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	Input
} from '@/app/shared/components/ui'

import { RegisterSchema, TypeRegisterSchema } from '../schemes/register.schema'

import { AuthWrapper } from './auth-wrapper'

interface RegisterFormProps {
	className?: string
}

export const RegisterForm: FC<RegisterFormProps> = () => {
	const form = useForm<TypeRegisterSchema>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			passwordRepeat: ''
		}
	})
	const onSubmit = (values: TypeRegisterSchema) => {
		console.log(values)
	}
	return (
		<AuthWrapper
			heading='Регистрация'
			description='Чтобы войти на сайт введите ваш email и пароль'
			backButtonLabel='Уже есть аккаунт? Войти'
			backButtonHref='/auth/login'
			isShowSocial
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-2'
				>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Имя</FormLabel>
								<FormControl>
									<Input placeholder='Максим' {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
				</form>
			</Form>
		</AuthWrapper>
	)
}
