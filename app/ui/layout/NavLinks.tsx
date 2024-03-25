import { Badge, NavLink } from '@mantine/core';
import { IconHome2 } from '@tabler/icons-react';
import Link from 'next/link';

type Props = {
    probabilityTypes: string[];
    technologyTypes: string[];
    algorithmTypes: string[];
}

export default function NavLinks(props: Props) {
  
  const {
    probabilityTypes,
    technologyTypes,
    algorithmTypes
  } = props;

  const toSearchParams = (types: string[]): string => {
    return types.map(typeName => `${typeName}=true`).join('&');
  }

  return (
    <>
      <NavLink
        component={Link}
        href={`probability-distributions/?${toSearchParams(probabilityTypes)}`}
        label="Probability Distributions"
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
      />
      <NavLink
        component={Link}
        href={`technologies/?${toSearchParams(technologyTypes)}`}
        label="Technologies"
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
      />
      <NavLink
        component={Link}
        href={`algorithms-models/?${toSearchParams(algorithmTypes)}`}
        label="Algorithms & Models"
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
      />
    </>
  );
}

    //   <NavLink
    //     href={`/?${}`}
    //     label="With right section"
    //     leftSection={<IconGauge size="1rem" stroke={1.5} />}
    //     rightSection={
    //       <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
    //     }
    //   />
    //   <NavLink
    //     href={`/?${}`}
    //     label="Disabled"
    //     leftSection={<IconCircleOff size="1rem" stroke={1.5} />}
    //     disabled
    //   />
    //   <NavLink
    //     href={`/?${}`}
    //     label="With description"
    //     description="Additional information"
    //     leftSection={
    //       <Badge size="xs" color="red" circle>
    //         3
    //       </Badge>
    //     }
    //   />
    //   <NavLink
    //     href={`/?${}`}
    //     label="Active subtle"
    //     leftSection={<IconActivity size="1rem" stroke={1.5} />}
    //     rightSection={
    //       <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
    //     }
    //     variant="subtle"
    //     active
    //   />
    //   <NavLink
    //     href={`/?${}`}
    //     label="Active light"
    //     leftSection={<IconActivity size="1rem" stroke={1.5} />}
    //     rightSection={
    //       <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
    //     }
    //     active
    //   />
    //   <NavLink
    //     href={`/?${}`}
    //     label="Active filled"
    //     leftSection={<IconActivity size="1rem" stroke={1.5} />}
    //     rightSection={
    //       <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
    //     }
    //     variant="filled"
    //     active
    //   />