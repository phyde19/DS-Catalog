import SearchLayout from "@/app/ui/layout/SearchLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SearchLayout>
            { children }
        </SearchLayout>
    )
}