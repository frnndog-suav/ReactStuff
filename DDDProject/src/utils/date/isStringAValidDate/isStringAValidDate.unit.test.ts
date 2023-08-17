import { isStringAValidDate } from './isStringAValidDate'

describe('isStringAValidDate', () => {
    it('should return false when input is not on expected format #01', () => {
        const result = isStringAValidDate('test')
        expect(result).toStrictEqual(false)
    })

    it('should return false when input is not on expected format #02', () => {
        const result = isStringAValidDate('2020-101-01')
        expect(result).toStrictEqual(false)
    })

    it('should return false when input is not on expected format #03', () => {
        const result = isStringAValidDate('20502-01')
        expect(result).toStrictEqual(false)
    })

    it('should return false when input is not on expected format #04', () => {
        const result = isStringAValidDate('2052-123')
        expect(result).toStrictEqual(false)
    })

    it('should return false when input is not on expected format #05', () => {
        const result = isStringAValidDate('2023-teste')
        expect(result).toStrictEqual(false)
    })

    it('should return false when input is not on expected format #06', () => {
        const result = isStringAValidDate('teste-05')
        expect(result).toStrictEqual(false)
    })
})
