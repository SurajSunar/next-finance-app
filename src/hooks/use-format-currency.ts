import {useMemo} from "react";

export default function useFormatCurrency(amount) {

    const format = (amount) =>
        new Intl.NumberFormat('en-US', {style: 'currency', currency: 'EUR'}).format(amount)


    return useMemo(() => format(amount)
    , [amount])
}