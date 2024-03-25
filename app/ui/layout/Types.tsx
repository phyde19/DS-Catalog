import { getUpdatedQueryString } from "@/app/lib/queryParams";
import { Checkbox, MantineProvider, createTheme } from "@mantine/core";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const theme = createTheme({
  cursorType: 'pointer',
});

type Props = {
    types: Array<{ name: string; isSelected: boolean; }>
}

export default function Types({ types }: Props) {
    const pathname = usePathname();
    const router = useRouter();

    const handleCheckboxChange = (typeName: string, checked: boolean) => {
        const updateQuery = getUpdatedQueryString(types, typeName, checked);
        router.push(`${pathname}/?${updateQuery}`);
    };

    return (
        <MantineProvider theme={theme}>
            <div className="pl-3 pt-4">
                {
                    types!.map(type => {
                        return (
                            <Checkbox
                                className="mb-3"
                                checked={type.isSelected}
                                key={type.name}
                                label={type.name}
                                onChange={(event) => handleCheckboxChange(
                                    type.name, event.currentTarget.checked
                                )}
                            />
                        )
                    })
                }
            </div>
        </MantineProvider>
    )
}