import { useMutation } from '@tanstack/react-query'

import { toastMessageHandler } from '@/app/shared/utils/lib/toast-message-handler'

import { TypeRegisterSchema } from '../schemes/register.schema'
import { authService } from '../services/auth.service'

export function useRegisterMutation() {
	const { mutate: register, isPending: isLoadingRegister } = useMutation({
		mutationKey: ['register user'],
		mutationFn: ({
			values,
			recaptcha
		}: {
			values: TypeRegisterSchema
			recaptcha: string
		}) => authService.register(values, recaptcha),
		onSuccess(data: any) {
			toastMessageHandler(data)
		},
		onError(error) {
			toastMessageHandler(error)
		}
	})

	return { register, isLoadingRegister }
}
