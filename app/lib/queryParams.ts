import { ReadonlyURLSearchParams } from "next/navigation";

type Types = Array<{ name: string; isSelected: boolean; }>

export const toDefualtQueryParams = (types: string[]): string => {
    return types.map(typeName => `${typeName}=true`).join('&');
}

export const getUpdatedQueryString = (types: Types, key: string, value: boolean): string => {
    for (let i = 0; i < types.length; i++) {
        if (types[i].name === key) {
            types[i].isSelected = value;
        }
    }
    return types.map(type => `${type.name}=${type.isSelected}`).join('&');
}

export const searchParamsToTypes = (searchParams: ReadonlyURLSearchParams): Types => {
    return Array.from(searchParams.entries()).map(([k, v]) => {
        return {
            name: k,
            isSelected: v === 'true'
        }
    });
}

export const searchParamsToTypeNames = (searchParams: ReadonlyURLSearchParams): string[] => {
    return Array.from(searchParams.entries())
        .filter(([k, v]) => v === 'true')
        .map(([k, v]) => k);
}