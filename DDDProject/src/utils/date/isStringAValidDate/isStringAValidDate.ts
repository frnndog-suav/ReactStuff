import {
    REGEX_DATE_PATTERN,
    REGEX_SHORT_DATE_PATTERN
} from '../../../constants/moment'

export const isStringAValidDate = (date: string) => {
    if (date.length === 7) {
        if (!REGEX_SHORT_DATE_PATTERN.test(date)) {
            return false
        }
    } else if (!REGEX_DATE_PATTERN.test(date)) {
        return false
    }

    return true
}
