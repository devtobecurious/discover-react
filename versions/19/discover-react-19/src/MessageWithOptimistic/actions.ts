export const deliver = async (value: FormDataEntryValue | null) => {
    await new Promise((res) => setTimeout(res, 1000))
    return value?.toString() + '(Real)'
}