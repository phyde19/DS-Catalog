import { Dispatch, SetStateAction, useState } from 'react';
import { Combobox, InputBase, useCombobox } from '@mantine/core';
import { Result } from '@/app/lib/mockData';

function getFilteredOptions(data: Result[], searchQuery: string, limit: number) {
  const result: string[] = [];

  for (let i = 0; i < data.length; i += 1) {
    if (result.length === limit) {
      break;
    }

    if (data[i].name.toLowerCase().includes(searchQuery.trim().toLowerCase())) {
      result.push(data[i].name);
    }
  }

  return result;
}

type Props = {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
    searchResults: Result[];
}

export default function SearchBar({ search, setSearch, searchResults }: Props) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const filteredOptions = search === '' 
    ? []
    : searchResults.map(res => res.name).slice(0, 2);

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setValue(val);
        setSearch(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          rightSection={<Combobox.Chevron />}
          value={search}
          onChange={(event) => {
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);
          }}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            console.log('blur')
            combobox.closeDropdown();
            setSearch(search || '');
          }}
          placeholder="Search..."
          rightSectionPointerEvents="none"
        />
      </Combobox.Target>

      {options.length > 0 && (
        <Combobox.Dropdown>
            <Combobox.Options>
            { options }
            </Combobox.Options>
        </Combobox.Dropdown>
      )}
    </Combobox>
  );
}