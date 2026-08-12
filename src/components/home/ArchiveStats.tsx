import { StatisticItem } from "@/components/ui/StatisticItem";
import { FadeInSection } from "@/components/motion/FadeInSection";
import type { ArchiveStat } from "@/types";

export function ArchiveStats({ stats }: { stats: ArchiveStat[] }) {
  return (
    <FadeInSection as="section" className="border-y border-border bg-paper/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border px-4 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.id} className="sm:px-6">
            <StatisticItem stat={stat} />
          </div>
        ))}
      </div>
    </FadeInSection>
  );
}
