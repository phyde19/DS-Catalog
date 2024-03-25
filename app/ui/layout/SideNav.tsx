import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import NavLinks from './NavLinks';
import Types from './Types';
import { usePathname, useSearchParams } from 'next/navigation';
import { searchParamsToTypes } from '@/app/lib/queryParams';

type Props = {
    isOpen: boolean;
    onToggleNav: () => void;
}

const probabiltyTypes = [ 
    'Discrete', 
    'Continuous' 
];

const technologyTypes = [ 
    'Programming Languages', 
    'Libraries/Frameworks'
];

const algorithmTypes =  [ 
    'Models',
    'Supervised', 
    'Unsupervised',
    'RL'
];

export default function SideNav({ isOpen, onToggleNav }: Props) {

    const category = usePathname().slice(1);
    const searchParams = useSearchParams();

    const types = searchParamsToTypes(searchParams);
    console.log(types);

    return (
        <div
            className={`${
            isOpen ? 'w-full sm:w-64' : 'w-16'
            } border-r px-4 m-0 ease-in-out`}
        >
            <nav className="">
                <div className="flex items-center justify-end">
                    <button
                        className="my-2 p-2 rounded-2xl hover:bg-gray-300 focus:outline-none"
                        onClick={onToggleNav}
                    >
                        {isOpen ? (
                            <ChevronLeftIcon className="h-6 w-6" />
                        ) : (
                            <ChevronRightIcon className="h-6 w-6" />
                        )}
                    </button>
                </div>
                {isOpen && (
                    <div>
                        <span className="font-medium">Category</span>
                        <NavLinks 
                            probabilityTypes={probabiltyTypes} 
                            technologyTypes={technologyTypes}
                            algorithmTypes={algorithmTypes}
                        />
                        <span className="block mt-10 font-medium">Type</span>
                        <Types types={types}/>
                    </div>
                )}
            </nav>
        </div>
    )
}

                // <ul>
                //     {isOpen && Array(4)
                //     .fill(0)
                //     .map((_, index) => (
                //         <li key={index} className="mb-4">
                //         <div className="h-7 bg-gray-400 rounded animate-pulse"></div>
                //         </li>
                //     ))}
                // </ul>