import { getProbabilityMockData, Result } from "@/app/lib/mockData";
import Catalog from "@/app/ui/Catalog/Catalog";

export default function Page() {
    const d = getProbabilityMockData();
    console.log('inside the server component');

    return (
        <Catalog
            category="Probability Distributions"
            data={d}
            filterTypes={['Continuous', 'Discrete']}
        />
    )
}