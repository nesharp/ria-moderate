export const FormError = ({ message }: { message: string | undefined }) => {
    if (!message) {
        return <div></div>
    }
    return <p className="font-normal ml-1 text-left text-sm text-red-600">{message}</p>
}
