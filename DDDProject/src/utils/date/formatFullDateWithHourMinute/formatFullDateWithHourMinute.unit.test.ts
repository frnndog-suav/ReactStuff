import { generalResources } from '@/resources/components'
import { setDefaultOptions } from 'date-fns'
import { formatFullDateWithHourMinute } from './formatFullDateWithHourMinute'
import ptBR from 'date-fns/locale/pt-BR'

setDefaultOptions({ locale: ptBR })

describe('formatFullDateWithHourMinute', () => {
    it("should return '-' when input is undefined", () => {
        const result = formatFullDateWithHourMinute()
        expect(result).toStrictEqual(generalResources.label.dash)
    })

    it("should return '-' when input doesn't match date regex pattern #01", () => {
        const result = formatFullDateWithHourMinute('teste')
        const expected = generalResources.label.dash
        expect(result).toStrictEqual(expected)
    })

    it("should return '-' when input doesn't match date regex pattern #02", () => {
        const result = formatFullDateWithHourMinute('2023-112-13')
        const expected = generalResources.label.dash
        expect(result).toStrictEqual(expected)
    })

    it("should return '-' when input doesn't match date regex pattern #03", () => {
        const result = formatFullDateWithHourMinute('202-01-13')
        const expected = generalResources.label.dash
        expect(result).toStrictEqual(expected)
    })

    it("should return '-' when input doesn't match date regex pattern #04", () => {
        const result = formatFullDateWithHourMinute('20-01-13')
        const expected = generalResources.label.dash
        expect(result).toStrictEqual(expected)
    })

    it("should return '-' when input doesn't match date regex pattern #05", () => {
        const result = formatFullDateWithHourMinute('20-01-123')
        const expected = generalResources.label.dash
        expect(result).toStrictEqual(expected)
    })

    it("should return '23/06/2023 23:59'", () => {
        const result = formatFullDateWithHourMinute(
            new Date(2023, 5, 23, 23, 59)
        )
        const expected = '23/06/2023 23:59'
        expect(result).toStrictEqual(expected)
    })

    it("should return '01/10/2021 00:59'", () => {
        const result = formatFullDateWithHourMinute(new Date(2021, 9, 1, 0, 59))
        const expected = '01/10/2021 00:59'
        expect(result).toStrictEqual(expected)
    })

    it("should return '15/03/2022 00:01'", () => {
        const result = formatFullDateWithHourMinute(new Date(2022, 2, 15, 0, 1))
        const expected = '15/03/2022 00:01'
        expect(result).toStrictEqual(expected)
    })

    it("should return '22/11/2020 00:00'", () => {
        const result = formatFullDateWithHourMinute(
            new Date(2020, 10, 22, 0, 0)
        )
        const expected = '22/11/2020 00:00'
        expect(result).toStrictEqual(expected)
    })

    it("should return '30/01/2019 23:00'", () => {
        const result = formatFullDateWithHourMinute(
            new Date(2019, 0, 30, 23, 0)
        )
        const expected = '30/01/2019 23:00'
        expect(result).toStrictEqual(expected)
    })

    it("should return '06/08/2018 01:00'", () => {
        const result = formatFullDateWithHourMinute(new Date(2018, 7, 6, 1, 0))
        const expected = '06/08/2018 01:00'
        expect(result).toStrictEqual(expected)
    })

    it("should return '02/08/2023 00:51'", () => {
        const result = formatFullDateWithHourMinute('2023-08-02T00:51:51.913Z')
        const expected = '02/08/2023 00:51'
        expect(result).toStrictEqual(expected)
    })

    it("should return '30/01/2021 01:00'", () => {
        const result = formatFullDateWithHourMinute('2021-01-30T01:00:59.913Z')
        const expected = '30/01/2021 01:00'
        expect(result).toStrictEqual(expected)
    })

    it("should return '28/10/2022 00:01'", () => {
        const result = formatFullDateWithHourMinute('2022-10-28T00:01:59.913Z')
        const expected = '28/10/2022 00:01'
        expect(result).toStrictEqual(expected)
    })
})
