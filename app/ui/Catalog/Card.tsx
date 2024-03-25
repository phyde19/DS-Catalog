import { ChartBarIcon, ChatBubbleBottomCenterIcon, CodeBracketIcon, Cog6ToothIcon, CogIcon, CpuChipIcon, CubeIcon, UserGroupIcon, VariableIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {
    name: string;
    type: string;
    description: string;
}

const iconMap: Record<string, any> = {
    'Discrete': ChartBarIcon,
    'Continuous': VariableIcon,
    'Programming Languages': CodeBracketIcon,
    'Libraries/Frameworks': CogIcon,
    'Models': CubeIcon,
    'Supervised': UserGroupIcon,
    'Unsupervised': CpuChipIcon,
    'RL': ChatBubbleBottomCenterIcon
};

export default function Card(props: Props) {
    const {
        name,
        type,
        description
    } = props;

    const Icon = iconMap[type];

    const fmtDescription = description.length > 50
        ? description.slice(0, 47) + '...'
        : description;

    return (
        <Link href={'probability-distributions/binomial'}>
            <div className="shadow-sm hover:shadow-lg hover:cursor-pointer border flex flex-col w-56 h-56 p-4">
                <div className="flex justify-between items-center mb-6">
                    <Icon className="text-amber-800 h-6 w-6 pb-1" />
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-800 font-bold">{name}</span>
                    <span className="text-sm mb-4">{type}</span>
                    <span className="text-sm">{fmtDescription}</span>
                </div>
            </div>
        </Link>
    )
}